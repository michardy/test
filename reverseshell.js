const http = require('http')
const port = 3000
host = '127.0.0.1';

server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
        });
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(body+String(eval(String(body))));
    }
    else
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('post to /');
    }

});

server.listen(port, host);
