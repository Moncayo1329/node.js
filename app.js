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

 const http = require('http');

 const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`
    <h1> Oops </h1>
    <p>We cant seen to find the page you are looking for </p>`)
 })

