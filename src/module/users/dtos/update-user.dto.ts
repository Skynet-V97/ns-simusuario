import { IsEmail, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class UpdateUserDto {
  @IsOptional()
  email?: string;

  @IsOptional()
  password?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
