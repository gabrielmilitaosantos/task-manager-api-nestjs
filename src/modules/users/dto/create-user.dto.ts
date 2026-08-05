import {
  IsEmail,
  IsNotEmpty,
  IsString,
  // IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  // @IsStrongPassword({ minLength: 8 }, { message: 'Password is too weak. It must contain at least 8 characters long.'})
  password: string;
}
