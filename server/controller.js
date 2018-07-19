

module.exports={
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then ( (inventory) => res.status(200).send(inventory) )
        .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
        // console.log(err);
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price, imageurl} = req.body;
        
        dbInstance.create_product([ name,  price, imageurl ])
        .then ( () => res.sendStatus(200) )
        .catch(err => res.status(500).send({ errorMessage: 'Oops, encountered error' }));
        // console.log(err);

    },

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_product([ params.id ])
          .then( () => res.sendStatus(200) )
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },

      update: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([ params.id, query.desc ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    

};


    // create: ( req, res ) => {
    //     const dbInstance = req.app.get('db');
    //     const { name, description, price, imageurl } = req.body;
                
    //     dbInstance.create_product([ name,  price, image ])
    //     .then( () => res.send('It worked!!! Woohoo!!!') )
        
    //                 } 
    

    