const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const los = require('./listOfServices.json');
const constants = require('./constants.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API server');
}
);

// Serve los.html for GET /services
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'los.html'));
});

app.get('/services/brandfilms', (req, res)=> {
    const index = constants.BRAND_FILMS;
    res.send(constants)
/*     const brandFilms = los.services[0]
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(brandFilms, null, 2)); */
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})