const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUS', os.cpus()) // vamos a poder escalar nuestra aplicacion de node
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)