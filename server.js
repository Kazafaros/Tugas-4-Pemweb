const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let namafile = "." + q.pathname;
    fs.readFile(namafile, (err, data) => {
        if (err) {
            if (req.url == '/') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.readFile('index.html', (err, data) => {
                    res.write(data);
                    return res.end();
                })
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>File tidak ditemukan</h1>');
            }
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('server berhasil berjalan di port 3000');
});

