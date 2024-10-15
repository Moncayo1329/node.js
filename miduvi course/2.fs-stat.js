// node.js es monohilo solo tiene un proceso 

const fs = require('node:fs') // A partir de node 16, se recomienda poner node: antes del module

const stats = fs.statSync('./archivo.txt')

console.log(
stats.isFile(), // si es un fichero 
stats.isDirectory(), // si es un directorio 
stats.isSymbolicLink(), // si es un enlace simbolico 
stats.size, // tamanho en bytes

)