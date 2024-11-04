/// En Node.js, el sistema de eventos es fundamental para su funcionamiento, ya que permite gestionar tareas asincrónicas de una manera eficiente y escalable. Aquí te explico los conceptos clave de los eventos en Node.js y cómo funcionan:

//¿Qué son los eventos en Node.js?
//Node.js usa un modelo de programación orientado a eventos, lo que significa que en vez de ejecutar el código de manera secuencial (como en los lenguajes de programación tradicionales), el código de Node.js responde a eventos. Un evento es una señal que indica que algo ha sucedido, como una conexión de red, la llegada de datos, un archivo que se ha leído completamente, etc.

//Por ejemplo, cuando un cliente envía una solicitud HTTP, esto genera un evento que el servidor de Node.js puede capturar y procesar.

//EventEmitter
//En Node.js, la clase central para manejar eventos es EventEmitter, que forma parte del módulo events. Esta clase permite que los objetos emitan eventos y respondan a ellos. Aquí tienes los métodos principales de EventEmitter:

//on(event, listener): Registra un listener (función) que se ejecutará cada vez que ocurra el evento especificado.
//emit(event, [args]): Emite un evento, opcionalmente pasando argumentos a los listeners registrados para ese evento.
//once(event, listener): Registra un listener que solo se ejecutará la primera vez que ocurra el evento.
//removeListener(event, listener): Elimina un listener específico de un evento.
//removeAllListeners([event]): Elimina todos los listeners para un evento específico o para todos los eventos si no se especifica ninguno.