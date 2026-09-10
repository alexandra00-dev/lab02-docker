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

## Tipos de redes en Docker

Docker permite utilizar diferentes tipos de redes para la comunicación entre contenedores.

### 1. Bridge

Es la red más utilizada por Docker. Permite que los contenedores se comuniquen entre sí dentro de una red aislada.

### 2. Host

El contenedor utiliza directamente la red del equipo anfitrión, reduciendo el aislamiento de red.

### 3. Overlay

Permite la comunicación entre contenedores que se encuentran en diferentes equipos o hosts Docker. Se utiliza principalmente con Docker Swarm.

### 4. Macvlan

Permite asignar una dirección MAC a los contenedores para que puedan aparecer en la red física como dispositivos independientes.

### 5. IPvlan

Permite conectar los contenedores a una red existente mediante direcciones IP.

### 6. None

Desactiva la conectividad de red del contenedor, dejando únicamente la interfaz de loopback.

## Tipos de volúmenes en Docker

Docker permite utilizar diferentes tipos de almacenamiento para los contenedores.

### 1. Named Volumes

Son volúmenes administrados por Docker y permiten almacenar información de forma persistente.

En este proyecto se utiliza el volumen `db_data` para almacenar los datos de PostgreSQL.