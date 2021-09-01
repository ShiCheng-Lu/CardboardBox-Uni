const express = require('express');
const path = require('path')

const server = express();

server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/courses', require('./routes/courses'));
server.use('/contact', require('./routes/contact'));
server.use('/apply', require('./routes/apply'));
server.use('/merch', require('./routes/merch'));

// home
server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/public/html/index.html'));
})

server.get('*', (req, res) => {
    res.status(404).send('404 page not found');
})

const port = 5000;
server.listen(port, () => {
    console.log(`listening on port ${port}`);
})
