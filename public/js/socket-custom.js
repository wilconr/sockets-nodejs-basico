var socket = io();

socket.on('connect', function() {
    console.log('Conectado a el servidor');
});
// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Wilmer',
    mensaje: 'Hi Humans'
}, function(resp) {
    console.log('Respuesta servidor: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});