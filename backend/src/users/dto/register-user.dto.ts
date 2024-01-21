import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
