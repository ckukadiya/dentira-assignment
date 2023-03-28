const http = require('http');
const express = require('express');
const port = 3000;
const host = 'localhost'
const {search} = require('./controller/search');

const app = express();
app.use('/search', search);

const main = () =>{
    console.log('Dentira Assignment');
}


const server = http.createServer(app);

server.listen(port, host, ()=> {
    console.log(`Server running at http://${host}:${port}`);
    main();
})