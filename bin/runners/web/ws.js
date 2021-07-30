const WebSocket = require('ws');

const run = (httpServer) => {
    const wsServer = new WebSocket.Server({ server: httpServer });
    wsServer.on('connection', (socket) => {
        console.log((new Date()) + 'New WS connection'); 
        socket.on('message', (data) => {
            //console.log(socket)
            console.log(`Frontend send ${data}`)
        });
    });
};

module.exports = run