# User-Cruds

# API de Tareas

Esta API te permite administrar tareas con operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Descripción

Esta API fue creada para ayudarte a gestionar tus tareas de manera eficiente. Puedes utilizarla para crear nuevas tareas, obtener detalles sobre tareas existentes, actualizar tareas y eliminarlas.

## Instalación y Uso

### Clonar el Repositorio

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```Consola
   https://github.com/RonaldoWongs/User-Cruds

   Instalación de Dependencias
   npm install
   
   Ejecución de la Aplicación

   Inicia la aplicación con el siguiente comando:

   node app.js
   
   La aplicación se ejecutará en http://localhost:3000.

Asegurate de estar en la carpeta src para su correcta funcionalidad usando (cd src)

Rutas Disponibles
A continuación, se detallan las rutas disponibles junto con sus descripciones y ejemplos de uso.

Obtener todas las tareas
Ruta: /todos
Método: GET
Descripción: Esta ruta permite obtener una lista de todas las tareas almacenadas en la base de datos.
Ejemplo de Uso:

http

GET http://localhost:3000/todos

Respuesta Exitosa (Código de Estado 200 - OK):

json

[
  {
    "id": 1,
    "title": "Completar tarea",
    "description": "Terminar el entregable de Node.js",
    "completed": false,
    "createdAt": "2023-08-30T03:34:41.698Z",
    "updatedAt": "2023-08-30T03:34:41.698Z"
  },
  {
    "id": 2,
    "title": "Completar tarea",
    "description": "Terminar el entregable de Node.js",
    "completed": false,
    "createdAt": "2023-08-30T03:34:45.257Z",
    "updatedAt": "2023-08-30T03:34:45.257Z"
  }
]

Obtener una tarea por su ID

Ruta: /todos/:id
Método: GET
Descripción: Esta ruta permite obtener una tarea específica por su ID.
Ejemplo de Uso:

http

GET http://localhost:3000/todos/1

Respuesta Exitosa (Código de Estado 200 - OK):

json

{
  "id": 1,
  "title": "Completar tarea",
  "description": "Terminar el entregable de Node.js",
  "completed": false,
  "createdAt": "2023-08-30T03:34:41.698Z",
  "updatedAt": "2023-08-30T03:34:41.698Z"
}

Crear una nueva tarea

Ruta: /todos
Método: POST
Descripción: Esta ruta permite crear una nueva tarea.
Cuerpo de la Solicitud (JSON):

json

{
  "title": "Completar tarea",
  "description": "Terminar el entregable de Node.js",
  "completed": false
}
Respuesta Exitosa (Código de Estado 201 - Creado):

json

{
  "id": 3,
  "title": "Completar tarea",
  "description": "Terminar el entregable de Node.js",
  "completed": false
}

Actualizar una tarea existente

Ruta: /todos/:id
Método: PUT
Descripción: Esta ruta permite actualizar una tarea existente por su ID.
Ejemplo de Uso:

http

PUT http://localhost:3000/todos/1
Cuerpo de la Solicitud (JSON):

json

{
  "title": "Tarea completada",
  "completed": true
}
Respuesta Exitosa (Código de Estado 200 - OK):

json

{
  "id": 1,
  "title": "Tarea completada",
  "description": "Terminar el entregable de Node.js",
  "completed": true,
  "createdAt": "2023-08-30T03:34:41.698Z",
  "updatedAt": "2023-08-30T04:00:00.000Z"
}

Eliminar una tarea

Ruta: /todos/:id
Método: DELETE
Descripción: Esta ruta permite eliminar una tarea por su ID.
Ejemplo de Uso:

http

DELETE http://localhost:3000/todos/2

Respuesta Exitosa (Código de Estado 204 - Sin Contenido):

Esta respuesta no incluye datos en el cuerpo de la respuesta.

Esta versión detallada del archivo "README.md" proporciona instrucciones claras sobre la instalación y el uso de la API, así como ejemplos de solicitudes y respuestas para cada ruta disponible. Puedes personalizar aún más este archivo según tus necesidades y agregar cualquier otra información relevante para los usuarios de tu API.
