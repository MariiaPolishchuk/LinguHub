import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(registerUserDto: RegisterUserDto): Promise<User> {
    const { email, password } = registerUserDto;
    const userExists = await this.usersService.findByEmail(email);

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.hashData(password);

    return this.usersService.create({
      ...registerUserDto,
      password: hashedPassword,
    });
  }

  async login(user: User): Promise<any> {
    const tokens = await this.getTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: string) {
    await this.usersService.update(userId, { refreshToken: null });
  }

  async refreshAccessToken(userId: string, refreshToken: string): Promise<any> {
    try {
      const user = await this.usersService.findOne(userId);
      const decoded = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_SECRET,
      });

      await this.validateRefreshToken(refreshToken, user.refreshToken);

      const accessToken = await this.jwtService.signAsync({
        sub: decoded.sub,
        email: decoded.email,
      });

      return {
        accessToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async validateRefreshToken(refreshToken: string, userRefreshToken: string) {
    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      userRefreshToken,
    );

    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }
  }

  async getTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync({
        sub: userId,
        email,
      }),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);

    await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await user.validatePassword(password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async hashData(data: string) {
    const salt = await bcrypt.genSalt();
    const hashedData = await bcrypt.hash(data, salt);

    return hashedData;
  }
}
