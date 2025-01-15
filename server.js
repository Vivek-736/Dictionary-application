const express = require('express');
var axios = require("axios");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.sendFile('public/index.html', { root: __dirname });
});

app.get('/searchword', (req, res) => {
    const word = req.query.entry;
    // console.log(`Searching for word: ${word}`);

    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry: word },
        headers: {
            'x-rapidapi-key': '86bff1fac8mshdba6049a017b862p18af46jsnf8358534df83',
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000`);
});