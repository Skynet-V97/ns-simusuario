import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../dtos/login.dto'; // Importamos el DTO

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /auth/login
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    // Llamamos al service para validar el usuario
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);

    // Si el usuario no es válido, lanzamos una excepción
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Si es válido, generamos el token
    return this.authService.login(user);
  }
}
