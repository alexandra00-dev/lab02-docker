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
Tipos de redes en Docker

Docker cuenta con diferentes tipos de redes, como bridge permite la comunicación entre contenedores dentro de una red aislada y es la más utilizada. Host permite que el contenedor utilice directamente la red del equipo anfitrión. Overlay permite la comunicación entre contenedores ubicados en diferentes equipos Docker.

Tipos de volúmenes en Docker

Named Volumes son administrados por Docker y permiten conservar los datos de forma persistente. 
Bind Mounts conectan una carpeta o archivo del equipo anfitrión con una ubicación dentro del contenedor. 
Tmpfs Mounts almacenan datos temporalmente en la memoria RAM y estos datos desaparecen cuando el contenedor se detiene.
