
//REferencias del html
const lbOnline = document.querySelector('#lbOnline');
const lbOffline =  document.querySelector('#lbOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {
    console.log('conectado');

    lbOffline.style.display = 'none';
    lbOnline.style.display = ''
});

socket.on('disconnect', () => {
    console.log('desconectado');
    lbOnline.style.display = 'none';
    lbOffline.style.display = ''
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})


btnEnviar.addEventListener( 'click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '234',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);

    });
});