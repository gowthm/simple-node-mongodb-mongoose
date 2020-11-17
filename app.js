const express = require('express')
const app = express();
const route = require('./config/config');
const bodyParser=require('body-parser'); 
const port = 3030;
// Parses the text as url encoded data 
app.use(bodyParser.urlencoded({extended: true}));  
  
// Parses the text as json 
app.use(bodyParser.json());
app.use(route);
app.listen(port , console.log('server started from ' + port));