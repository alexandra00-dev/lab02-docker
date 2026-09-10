# Laboratorio 02 - Docker Compose

Proyecto de Docker Compose que contiene una API construida localmente y una base de datos PostgreSQL.

## Estructura del proyecto

```text
LAB02/
├── api/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Variables de entorno

El proyecto utiliza variables de entorno para la configuración de la base de datos y la API.

Para utilizarlas, se debe copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

Variables configuradas:
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña de la base de datos.
- `DB_NAME`: Nombre de la base de datos.
- `DB_PORT`: Puerto de PostgreSQL (5432).
- `PORT`: Puerto interno de la API (3000).

Comandos para el despliegue

1. Iniciar los contenedores
Construye la imagen de la API y levanta los servicios en segundo plano:

```bash
docker compose up --build -d
```

2. Verificar contenedores y réplicas
Verifica que los 4 contenedores (la base de datos y las 3 copias de la API) estén activos:

```bash
docker compose ps
```

3. Probar las 3 copias de la API
Cada instancia está expuesta en un puerto diferente:
- Copia 1: http://localhost:3001
- Copia 2: http://localhost:3002
- Copia 3: http://localhost:3003

4. Detener los servicios

```bash
docker compose down
```

Tipos de redes en Docker

Docker permite utilizar diferentes tipos de redes para la comunicación entre contenedores.

1. Bridge

Es la red más utilizada por Docker. Permite que los contenedores se comuniquen entre sí dentro de una red aislada.

2. Host

El contenedor utiliza directamente la red del equipo anfitrión, reduciendo el aislamiento de red.
