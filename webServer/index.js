const http = require('http');

const myServer = http.createServer((req,res) => {
    res.end("Hello from Server!");
});

myServer.listen(8000,() => {
    console.log("Server is listening on port 8000");
}) 