import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString()
  username: string;

  @IsNotEmpty()
  password: string;
}
