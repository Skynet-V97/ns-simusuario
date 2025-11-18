# Proyecto NestJS: ns-prueba

Este proyecto es una prueba de **NestJS** para comsumir usuarios para el otro proeycto gestión de formularios, con integración de TypeORM, PostgreSQL y Docker.

Disponible en: https://github.com/Skynet-V97/ns-prueba.git

---

## Inicialización del proyecto

Para crear y abrir el proyecto:

```bash
nest new ns-simusuario
cd ns-simusuario
code .
```

## Instalación de dependencias

Instala las siguientes dependencias necesarias para el proyecto:

```bash
npm install @nestjs/config
npm install @nestjs/typeorm typeorm pg
npm install class-validator
npm install @nestjs/mapped-types
npm install class-transformer class-validator
npm install @nestjs/terminus @nestjs/axios
npm install bcrypt
```

Para manejar variables de entorno en Docker:

```bash
npm install dotenv
```

Para manejar JWT
npm install @nestjs/jwt @nestjs/passport passport passport-local passport-jwt bcrypt
npm install --save-dev @types/passport-jwt @types/bcrypt
npm install @nestjs/config

## Levantar el proyecto

Con Docker y NestJS en modo desarrollo:

```bash
docker-compose up --build
docker-compose up -d
npm run start:dev
```

## Visualizar archivos en árbol

Para ver la estructura del proyecto en árbol:

```bash
tree "C:/ruta/de/acceso" /f
```

## URLs y Endpoints
Formularios

```bash
| Método | URL         | Descripción                  |
| ------ | ----------- | ---------------------------- |
| GET    | `/users`    | Listar todos los usuarios    |
| POST   | `/users`    | Crear un usuarios            |
| GET    | `/users/id` | Obtener usuarios por ID      |
| DELETE | `/users/id` | Eliminar usuarios por ID     |
| PATCH  | `/users/id` | Actualizar usuarios por ID   |
(no incluye modificaciones anidadas)
Puerto de trabajo: 3001
```


## JSON DE PRUEBA PARA HACER POST

```bash
{
  "username": "usuario1",
  "email": "usuario1@example.com",
  "password": "123456",
  "role": "admin"
}

{
  "username": "usuario2",
  "email": "usuario2@example.com",
  "password": "987654",
  "role": "user"
}
```

## JSON DE PRUEBA PARA OBTENER JWT

Ingrese a

```bash
http://localhost:3001/auth/login
```

con el siguiente Body de ejemplo

```bash
{
  "email": "usuario3@example.com",
  "password": "987654"
}
```



