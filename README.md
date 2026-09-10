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

Tipos de redes en Docker

Docker permite utilizar diferentes tipos de redes para la comunicación entre contenedores.

Bridge

Es la red más utilizada por Docker. Permite que los contenedores se comuniquen entre sí dentro de una red aislada.

Host

El contenedor utiliza directamente la red del equipo anfitrión, reduciendo el aislamiento de red.
