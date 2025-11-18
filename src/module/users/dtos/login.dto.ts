import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6) // Asegúrate de que la contraseña sea al menos de 6 caracteres
  password: string;
}
