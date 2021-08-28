const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, function(){
    console.log('listening on port: ' + PORT);
});