import { IsEmail, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
