// Events 
// Event driven programming
/// used heavily in node.js 

const EventEmitter = require('events');


const customEmitter = new EventEmitter()


customEmitter.on('response', () => {

console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
console.log(`some other logic here`)

}) 


customEmitter.emit('response', 'john', 34)