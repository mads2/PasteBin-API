'use strict'

const express = require('express');
const request = require('request');
const app = express();
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('view engine', 'pug');

const port = normalizePort(process.env.PORT || '3000');
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Paste.bin API'
    });
});

function normalizePort(val) {
	const port = parseInt(val, 10);
	if (isNaN(port)) {
		return val;
	}
	
	if (port >= 0) {
		return port;
	}
	
	return false;
}




var id = 0;
app.post('/envia', (req, res) => {
    console.log('Aqui vai acontecer a parte do back-end');
    var corpo = req.body.mensagem;
    console.log('req.body.mensagem: ' + corpo   );

    var options = { method: 'POST',
        url: 'https://pastebin.com/api/api_post.php',
        headers:
            {   'cache-control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded' },
        form:
            {   api_dev_key: '1b5c850767eafcafe8c72ddbf0ff9e3b',
                api_paste_code: corpo,
                api_paste_private: '1',
                api_paste_name: 'api_paste_name',
                api_paste_expire_date: '10M',
                api_paste_format: 'javascript',
                api_option: 'paste',
                undefined: undefined } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        response.done;
        console.log('O link gerado foi: ' + body);
        console.log('res.headersSent = ' + res.headersSent);
        console.log('res.headersSent não deu boa');
        id = id + 1;
        res.send('A resposta do servidor node é: ' + body + '     Sua ID é: ' + id);  // Com res.send o navegador vai para /enviar e apresenta a mensagem na passada na tela.


    });

    // res.send('Ativou o post ' + options.form.api_dev_key + '/n mensagem: ' + corpo);


});
