// untuk membangun dan memanggil server
const http = require('http');

const server = http.createServer((req, res) => {
    // halaman yang kita buka aktif
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server Berhasil Berjalan di port 3000');
});