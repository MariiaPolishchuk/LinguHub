import { Controller, Body, Req, Post, Get, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { AccessTokenGuard } from './guards/access-token.guard';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.signup(registerUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Req() req: Request) {
    return this.authService.login(req.user as User);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  async logout(@Req() req: Request) {
    await this.authService.logout(req.user['sub']);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshAccessToken(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];

    return this.authService.refreshAccessToken(userId, refreshToken);
  }

  @UseGuards(AccessTokenGuard)
  @Get('me')
  me() {
    return { message: 'You are authenticated' };
  }
}
