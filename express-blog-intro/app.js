const express = require('express');
const app = express();
const path = require('path');
const postsController = require('./controllers/posts');

const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
});

app.get('/posts', postsController.index);

app.listen(PORT, () => {
    console.log(`Server in ascolto su  http://localhost:4000/posts`);
});

