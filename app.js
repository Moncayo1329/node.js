// call back enssentially what it means is that we run. es decirm que cuando una funcionalidad esta completa  de ahi run the callback. 
// normally would do with add event listener on a button remember cualquier event. 

// differencer between the asynchronous or non-blocking and synchronous 

// En programacion un modulo es una unidad de cosigo independiente que encapsula funcionalidades especificas. Los modulos permiten dividir un programa grande en partes mas 
// pequeñas, manejables y reutilizables. Cada módulo contiene funciones, clases, variables, o cualquier otro bloque de código que cumpla con un propósito específico.

// Beneficios de Usar Módulos
//Reutilización de Código: Puedes usar el mismo módulo en diferentes partes de tu aplicación o en diferentes proyectos.
//Mantenimiento: Facilita la actualización y el mantenimiento del código al localizar cambios en módulos específicos.
//Organización: Ayuda a organizar el código de manera lógica y estructurada.
//Encapsulamiento: Protege partes del código para que no sean accesibles desde otros módulos, mejorando la seguridad y reduciendo errores.

// Módulos de CommonJS:

//Utilizados principalmente en Node.js.
//Los módulos se definen en archivos y se exportan usando module.exports o exports.
//se importan usando require. 

//Módulos de ECMAScript (ESM):

//Estándar oficial introducido en ES6 (ECMAScript 2015).
//Los módulos se exportan usando export y se importan usando import.
//Funciona tanto en navegadores modernos como en Node.js.

//En Node.js, 
//el http es un módulo incorporado que proporciona funcionalidades para crear y manejar servidores web y hacer solicitudes HTTP.
 //No necesitas instalarlo porque viene incluido con Node.js.

// Variables Globales 
// Global this es una variable global en toda nuestra apliacion y no importa en el sitio donde este 

//CommonJS 

const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUS', os.cpus()) // vamos a poder escalar nuestra aplicacion de node
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)
