const express = require('express');
//const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000
const app = express();
//require('dotenv').config();

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(express.static('public'));

//app.get('/:search?', async (req, res) => {
    /*console.log(req.params);
    const search = req.params;
    var api_url = `https://jobs.github.com/positions.json?search=${search}`
    const response = await fetch(api_url);
    res.json(json);*/
//})
