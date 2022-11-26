

const socketController = (socket) => {
        console.log('Cliente conectado', socket.id);

        socket.on('disconnect', () => {
            console.log('Cliente desconectado', socket.id)
        });
        socket.on('enviar-mensaje', (payload, callback) => {

            const id = 123456;
            callback(id);
            //broadcast--enviaar a otra gente pero no a uno mismo
            socket.broadcast.emit('enviar-mensaje', payload)
        })


}

module.exports = {
    socketController
}