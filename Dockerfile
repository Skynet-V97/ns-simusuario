# 1️⃣ Etapa de build
FROM node:20-alpine AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos todo el código fuente
COPY . .

# Compilamos TypeScript a JavaScript
RUN npm run build

# 2️⃣ Etapa de producción
FROM node:20-alpine

WORKDIR /app

# Copiamos solo lo necesario de la etapa build
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Instalamos solo dependencias de producción
RUN npm install --production

# Exponemos el puerto donde NestJS corre
EXPOSE 3001

# Comando para iniciar la app
CMD ["node", "dist/main.js"]
