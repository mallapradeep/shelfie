const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
//const controller = require('./server/controller.js');


const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
  }).catch( err => console.log(err) );
  

  //app.get( '/api/inventory', controller.get );



const port =  3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
