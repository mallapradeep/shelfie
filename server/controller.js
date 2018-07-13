

module.exports={
   create: ( req, res) => {
      const dbInstance = req.app.get('db');
      const { name,  price, image } = req.body;
  
      dbInstance.create_product([ name,  price, image ])
        .then( () => res.status(200).send( 'It worked!!! Woohoo!!!'))
       
        } 
    }
    