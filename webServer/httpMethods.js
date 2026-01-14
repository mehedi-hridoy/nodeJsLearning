// example of httpMethods.js in a web server
const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            handleGetRequest(req, res);
            break;
        case 'POST':
            handlePostRequest(req, res);
            break;
        case 'PUT':
            handlePutRequest(req, res);
            break;
        case 'DELETE':
            handleDeleteRequest(req, res);
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
    }
});

function handleGetRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('GET request received');
}

function handlePostRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`POST request received with data: ${body}`);
    });
}

function handlePutRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`PUT request received with data: ${body}`);
    });
}

function handleDeleteRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('DELETE request received');
}

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});