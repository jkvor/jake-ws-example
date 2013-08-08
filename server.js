var port = process.env.PORT || 5000;
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: port});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('hello world!');
});
