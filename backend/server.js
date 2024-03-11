const express = require('express');
require('dotenv').config()

// express app
const app = express()

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening of port ${process.env.PORT}`);
});