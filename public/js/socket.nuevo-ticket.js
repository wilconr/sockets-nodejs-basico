// Comando para establecer la conexion con los socket

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado a el servidor');
});
// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(`Actual: ${resp.actual}`);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});