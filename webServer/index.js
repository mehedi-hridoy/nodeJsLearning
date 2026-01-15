// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const myServer = http.createServer((req,res) => {
//     res.end("Hello from Server!");
// });

// myServer.listen(8000,() => {
//     console.log("Server is listening on port 8000");
// }) 

const http = require('http');
const fs = require('fs');
const url = require('url'); 
const express = require('express');

const app = express();

app.get('/', (req, res) => {
   return res.send('Hello from Express Server!');
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});


const myServer = http.createServer(app);

myServer.listen(8000,() => {
    console.log("Express Server is listening on port 8000");
})
