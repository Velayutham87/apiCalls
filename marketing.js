const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const los = require('./listOfServices.json');
const constants = require('./constants.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to The Old Marketing Company');
});

// Serve los.html for GET /services
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'los.html'));
});

app.get('/services/brandfilms', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.BRAND_FILMS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/corporatefilms', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.CORPORATE_FILMS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/productvideos', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.PRODUCT_VIDEOS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/explainervideos', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.EXPLAINER_VIDEOS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/socialmediacontent', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.SOCIAL_MEDIA_CONTENT];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/eventcoverage', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.EVENT_COVERAGE];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/testimoialvideos', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.TESTIMONIAL_VIDEOS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/trainingvideos', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.TRAINING_VIDEOS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/animationandmotiongraphics', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.ANIMATION_AND_MOTION_GRAPHICS];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.get('/services/dronevideography', (req, res)=> {
    res.set('Content-Type', 'application/json')
    // res.send(JSON.stringify(los.services[constants.serviceIds.BRAND_FILMS], null, 2))
    const fullData = los.services[constants.serviceIds.DRONE_VIDEOGRAPHY];
    const {id, ...filteredData} = fullData;
    res.send(JSON.stringify(filteredData, null,2))
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})