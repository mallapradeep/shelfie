const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');


const app = express();
app.use( bodyParser.json() );

// connecting server to database
massive( process.env.CONNECTIONS ).then( dbInstance => {
  app.set('db', dbInstance)
  }).catch( err => console.log(err) );
  
//GET ENDPOINTS
  app.get('/api/inventory', controller.getAll );
   app.post( '/api/product', controller.create );
  app.delete('/api/product/:id', controller.delete);
  app.put('/api/product/:id', controller.update);

const port =  3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
