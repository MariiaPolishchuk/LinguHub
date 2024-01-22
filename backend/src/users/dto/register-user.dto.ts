import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(8)
  password: string;
}
