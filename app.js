const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.PORT || 3000;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});
router.get('/theaters', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/theaters.html'));
});
router.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/movies.html'));
});

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/templates'));
app.use(express.static(__dirname + '/view'));

app.use('/', router);

app.listen(port, () => {
    console.log('Running');
});