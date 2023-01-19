const express = require('express');
const path = require('path');
const rootDir = require('../helper/path.js');

const Router = express.Router();

Router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = Router;