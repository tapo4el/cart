const path = require('path');
const express = require('express');

const data = require('./data');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('/data', (req, res) => {
    res.json(data);
});
server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'), function() {
    console.log('listening on port ');
});
