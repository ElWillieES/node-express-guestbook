# Node Express GuestBook

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=ffffff)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)&nbsp;

Más ejemplos de Badges en [markdown-badges](https://ileriayo.github.io/markdown-badges/), [Badges 4 README.md Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile) y [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

## Introducción

**Node Express GuestBook** es una aplicación Web de ejemplo, desarrollada con Node.js y Express.js, utilizando el motor de plantillas EJS (Embedded JavaScript) para generar HTML de forma dinámica.

Se trata de una sencilla aplicación Web que corre en el servidor (SSR: Server Side Rendering), formada por las siguientes páginas (vistas EJS):

 * La home, que muestra el libro de visitas (GuestBook).
 * /new-entry que permite añadir una entrada adicional.
 * Una página personalizada para mostrar el error 404.

Las anteriores páginas, a su vez incluyen los siguientes fragmentos HTML también generados como vistas EJS:
 * Un Header para el encabezado de las páginas.
 * Un Footer para el pie de las páginas.

## Persistencia de los datos

Para la persistencia se utiliza el objeto `app.locals`, almacenando en el de forma global un array con las entradas del GuestBook. Cada entrada está formada por los siguientes campos:

 * title
 * content
 * published

## Estructura de ficheros del repo

El código del repo está organizado de la siguiente manera:

- **app/**: Contiene el código fuente de la aplicación.
  - **node_modules/**: Almacena las dependencias del proyecto (ej: al instalarlas con npm install), incluido en el .gitignore para no subirlo al repo.
  - **views/**: Contiene las vistas EJS (Embedded JavaScript), es decir, las páginas (o fragmentos como el footer) de la aplicación Web.
    - **404.ejs**: Página de error 404, cuando se intenta acceder a una página que no existe
    - **footer.ejs**: Pié de página.
    - **header.ejs**: Encabezado de página.
    - **index.ejs**: Página principal del GuestBook
    - **new-entry.ejs**: Página para añadir una nueva entrada
  - **index.js**: Archivo principal que configura y arranca la aplicación.
  - **package-lock.json**: Archivo de metadatos para fijar de manera precisa las versiones exactas de todas las dependencias y sus subdependencias.
  - **package.json**: Archivo de configuración de npm con las dependencias y scripts del proyecto.

- **.dockerignore**: Archivo que especifica los archivos y carpetas que deben ser excluidos durante el proceso de construcción de la imagen Docker (similar al archivo .gitignore).
- **.gitignore**: Archivo que especifica los archivos y carpetas que deben ser ignorados por Git.
- **Dockerfile**: Archivo Dockerfile para ejecutar la aplicación dockerizada.
- **README.md**: Documentación principal del proyecto.

## Módulos de Node.js utilizados (dependencias)

Revisar el fichero **package.json** para mayor detalle.

### Dependencias de Desarrollo

| Dependencia               | Motivo
|---------------------------|-------
| nodemon                   | Permite reiniciar automáticamente la aplicación al detectar una cambio en un fichero (útil durante el desarrollo y pruebas en local)

### Dependencias de Producción

| Dependencia         | Motivo
|---------------------|-------
| cross-env           | Permite establecer y utilizar variables de entorno de manera uniforme en diferentes plataformas, como Windows, Linux y macOS
| compression         | Permite comprimir las respuestas HTTP
| cors                | Permite configurar CORS (Cross-Origin Resource Sharing)
| ejs                 | Motor de plantillas EJS (Embedded JavaScript) para generar HTML de forma dinámica
| express             | Es un servidor Web para Node.js (Web Application Framework)
| express-request-id  | Añade a la petición entrante (request) un campo id con un valor único, y lo añade en la respuesta (response) al encabezado X-Request-Id, para tener trazabilidad 
| morgan              | Es un Logger para el registro de peticiones HTTP


## Cómo ejecutar en local el proyecto, de forma dockerizada

A continuación se muestra:

* Cómo crear una imagen en local con docker build.
* Cómo listar las imágenes que tenemos disponibles en local. Deberá aparecer la que acabamos de crear.
* Cómo ejecutar un contenedor con nuestra imagen.
* Cómo comprobar los contenedores que se están ejecutando (estará el nuestro).
* Cómo ver los Logs de nuestro contenedor.
* Cómo parar el contenedor.

```shell
docker build -t node-express-guestbook .
docker images
docker run -it --rm -d -p 3000:3000 --name node-express-guestbook node-express-guestbook
docker ps
docker logs node-express-guestbook
docker stop node-express-guestbook
```

## Cómo ejecutar en local el proyecto, de forma nativa

Nos posicionamos en el directorio de la aplicación (app).

```shell
cd app
```

Instalamos las dependencias, si no lo hemos hecho anteriormente.

```shell
npm install
```

Podemos ejecutar la aplicación, en modo DEV, así.

```shell
npm run dev
```

