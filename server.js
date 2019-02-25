'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

var route = router.get('/', (req, res, next) =>
{
    res.status(200).send({
        title: "Node Storm API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);

