/// En Node.js, un stream (o flujo) es una abstracción que permite leer o escribir datos de manera secuencial y en trozos pequeños, en lugar de manejar todo el contenido a la vez. Esto es especialmente útil para trabajar con archivos grandes, redes y otros procesos en los que manejar el contenido completo de una sola vez consumiría mucha memoria y reduciría el rendimiento.

//Tipos de Streams en Node.js Node.js tiene cuatro tipos principales de streams:

//Readable Streams (Streams de Lectura): Permiten leer datos en trozos de una fuente, como un archivo o una respuesta HTTP. Ejemplo: Leer un archivo línea por línea.

//Writable Streams (Streams de Escritura): Permiten escribir datos en un destino, como un archivo o una solicitud HTTP. Ejemplo: Guardar datos en un archivo sin tener que escribir todo de una vez.

//Duplex Streams (Streams Duplex): Son streams que pueden leerse y escribirse al mismo tiempo, como en una conexión de red TCP.

//Transform Streams (Streams de Transformación): Son duplex streams que pueden modificar o transformar los datos a medida que pasan a través del stream, como comprimir datos o cambiarlos de formato.

//¿Por qué usar Streams?
//Los streams son útiles en Node.js porque:

//Ahorran memoria: Al leer y procesar datos en partes, puedes trabajar con archivos o entradas muy grandes sin cargar todo el contenido en la memoria.
//Mejoran el rendimiento: Node.js puede comenzar a procesar datos tan pronto como recibe un primer trozo, en lugar de esperar a recibir todo.
//Son asincrónicos: Los streams en Node.js son no bloqueantes, lo cual es ideal para manejar múltiples solicitudes simultáneamente, como en un servidor web. 

const fs = require('fs');

// Creamos un stream de lectura para un archivo
const readableStream = fs.createReadStream('archivo_grande.txt', { encoding: 'utf8' });

// Configuramos un evento para recibir los datos en trozos
readableStream.on('data', (chunk) => {
  console.log('Nuevo trozo de datos:', chunk);
});

// Manejar el final del stream
readableStream.on('end', () => {
  console.log('No hay más datos en el archivo.');
});
