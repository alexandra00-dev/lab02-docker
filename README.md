# Laboratorio 02: Infraestructura como Código - Docker Compose

Proyecto práctico para la orquestación de servicios en contenedores utilizando **Docker Compose**. El despliegue incluye una base de datos PostgreSQL persistente mediante volúmenes, gestión de configuración a través de variables de entorno y 3 instancias/réplicas de una API desarrollada y construida localmente.

---

## Estructura del Proyecto

```text
lab02/
├── api/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

## Requisitos Previos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.
- [Git](https://git-scm.com/) instalado.

---

## Configuración y Variables de Entorno

El proyecto hace uso de variables de entorno para evitar almacenar credenciales sensibles en el repositorio.

1. Copiar la plantilla de variables de entorno:
   ```bash
   cp .env.example .env
   ```
2. Parámetros definidos en `.env`:
   - `DB_USER`: Usuario administrador de PostgreSQL.
   - `DB_PASSWORD`: Contraseña para el usuario.
   - `DB_NAME`: Nombre de la base de datos inicial.
   - `DB_PORT`: Puerto de exposición para la base de datos (5432).
   - `PORT`: Puerto interno del contenedor de la API (3000).

---

## Comandos para Despliegue

### 1. Iniciar los servicios y compilar la API
Construye la imagen local de la API y levanta los servicios en segundo plano:
```bash
docker compose up --build -d
```

### 2. Verificar el estado de los contenedores
Muestra los contenedores activos, réplicas y mapeo de puertos:
```bash
docker compose ps
```

### 3. Consultar las 3 copias de la API
Cada réplica expone un puerto diferente del host y devuelve su identificador de contenedor (`container_id`), demostrando que son 3 instancias independientes:
- **Copia 1:** [http://localhost:3001](http://localhost:3001)
- **Copia 2:** [http://localhost:3002](http://localhost:3002)
- **Copia 3:** [http://localhost:3003](http://localhost:3003)

Prueba rápida desde terminal:
```bash
curl http://localhost:3001
curl http://localhost:3002
curl http://localhost:3003
```

### 4. Ver logs en tiempo real
```bash
docker compose logs -f
```

### 5. Detener los servicios
Detiene y remueve los contenedores manteniendo el volumen de datos:
```bash
docker compose down
```

Para detener y eliminar también el volumen persistente:
```bash
docker compose down -v
```

---

## Cuestionario Teórico

### 1. Tipos de Redes que Existen en Docker

Docker proporciona diferentes controladores de red (*network drivers*) para permitir la comunicación entre contenedores o entre contenedores y el mundo exterior:

| Tipo de Red | Descripción y Caso de Uso |
| :--- | :--- |
| **`bridge`** | Es el controlador predeterminado. Crea una red interna aislada dentro del mismo host de Docker. Los contenedores conectados a la misma red bridge pueden comunicarse entre sí por IP o nombre de servicio (DNS interno). Ideal para aplicaciones que corren en un único servidor. |
| **`host`** | Elimina el aislamiento de red entre el contenedor y el host anfitrión. El contenedor comparte directamente la pila de red y los puertos de la máquina física/virtual sin necesidad de redireccionamiento de puertos (`-p`). Ofrece mayor rendimiento de red. |
| **`overlay`** | Permite la comunicación entre contenedores distribuidos a través de múltiples nodos físicos o virtuales (Docker Swarm o Kubernetes). Encripta y enruta tráfico entre hosts de forma transparente. |
| **`macvlan`** | Asigna una dirección MAC física a cada contenedor, haciendo que la red corporativa o el router lo reconozcan como un dispositivo físico independiente con su propia IP de la subred local. |
| **`ipvlan`** | Similar a `macvlan`, pero comparte la dirección MAC del host para todos los contenedores mientras asigna direcciones IPv4/IPv6 independientes a cada uno. Es ideal cuando el switch o router tiene límites en la cantidad de direcciones MAC permitidas. |
| **`none`** | Deshabilita toda interfaz de red en el contenedor (solo deja la interfaz `loopback`). Se utiliza para procesos aislados de alta seguridad, tareas por lotes (*batch jobs*) o cálculos que no deben tener acceso exterior. |

---

### 2. Tipos de Volúmenes y Almacenamiento en Docker

Docker ofrece tres mecanismos principales para persistir datos más allá del ciclo de vida de un contenedor:

| Tipo de Almacenamiento | Descripción y Características |
| :--- | :--- |
| **Volúmenes con Nombre (*Named Volumes*)** | Es el mecanismo recomendado y gestionado íntegramente por Docker. Los datos se almacenan en una zona administrada del sistema de archivos del host (`/var/lib/docker/volumes/` en Linux). Son independientes del ciclo de vida del contenedor, fáciles de respaldar, migrar y compartir de forma segura entre múltiples contenedores. (Utilizado en este proyecto como `db_data`). |
| **Montajes Vinculados (*Bind Mounts*)** | Mapean directamente un archivo o directorio específico del host a una ruta del contenedor (por ejemplo: `./codigo:/app`). Dependen de la estructura de carpetas y permisos del sistema operativo anfitrión. Muy útiles en entornos de desarrollo para recarga en caliente (*hot-reload*). |
| **Montajes en Memoria (*tmpfs Mounts*)** | Almacenan información exclusivamente en la memoria RAM del host anfitrión. Nunca se escriben en el disco ni en la capa del contenedor. Ideales para almacenar datos temporales de lectura/escritura rápida o información altamente sensible (claves o tokens) que no deben persistir al apagarse el contenedor. |

---

## Guía de Conventional Commits Usados

Este repositorio sigue el estándar de **Conventional Commits**:
- `chore: initial project configuration and gitignore`
- `feat(api): create lightweight nodejs api and dockerfile`
- `feat(compose): add docker-compose with 3 api replicas, postgresql and volume persistence`
- `docs: add deployment instructions, network and volume explanations in readme`

---

## Pasos para Subir a tu Repositorio Público de GitHub

1. Crea un nuevo repositorio en tu cuenta de GitHub (ejemplo: `lab02-docker-compose`) y configúralo como **Público**.
2. En tu terminal, dentro de la carpeta `lab02`:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/lab02-docker-compose.git
   git branch -M main
   git push -u origin main
   ```

---

## Capturas del Proyecto Desplegado (Opcional)

*(Espacio para adjuntar capturas de pantalla de la terminal con `docker compose ps` y del navegador en los puertos 3001, 3002 y 3003).*

```text
[Captura 1: docker compose up y docker compose ps]
[Captura 2: Respuesta de las 3 réplicas en el navegador o curl]
```
