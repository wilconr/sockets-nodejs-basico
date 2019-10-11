// Comando para establecer la conexion con los socket

var socket = io();

socket.on('connect', function() {
    console.log('Conectado a el servidor');
});
// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('modulo')) {
    window.location = 'index.html';
    throw new Error('El modulo es necesario');
}

var modulo = searchParams.get('modulo');
var label = $('small');

console.log(`Modulo: ${modulo}`);
$('h1').text(`Modulo: ${modulo}`);

$('button').on('click', function() {
    socket.emit('atenderTicket', { modulo }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        console.log(resp);
        label.text(`Ticket ${resp.numero}`);

    });
});