import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/users/users.module';
import { User } from './module/users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',    // fuera de Docker
      port: 5434,           // puerto mapeado en docker-compose.yml
      username: 'postgres',
      password: 'postgres',
      database: 'ns_prueba2',
      entities: [User],
      synchronize: true,
      logging: true,
    })

  ],
})
export class AppModule {}
