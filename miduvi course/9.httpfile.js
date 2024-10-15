const http = require('node:http') 
const { findAvaliablePort } = require('./10.free-port.js')

const server = http.createServer((req,res) => {
console.log('request received')
res.end('hola mundo everyone fuck ')

})

findAvaliablePort(3000).then(port => {
    server.listen(0, () => {

        console.log(`server listening on port http://localhost:${port}`)

})

})