# Imagen base ligera de Node.js
FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos de la aplicación
COPY package.json ./
COPY index.js ./

# Puerto expuesto
EXPOSE 3000

# Comando de inicio
CMD ["node", "index.js"]
