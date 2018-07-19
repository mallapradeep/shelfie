import React, { Component } from 'react';
import Product from '../Product/Product';
//import { Link } from 'react-router-dom';


class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state= {
     list: this.props.list
    }
  }
    
    render() {

     let newList= this.props.list.map((element,i)=>

          (
          <div key={i}>
            <h3>{element.name} </h3>
            <h3>{element.price}</h3>
           <img src= {element.imageurl} alt= 'shoe img'/>
           <button onClick={() => this.removeProduct(element.id)}>Delete</button>
           {/* <Link to={`/edit/${element.id}`}><button>Edit</button></Link> */}
            </div>))
      
      
      return (
        <div>
            <Product newList={newList}/>
            <h1>Dashboard</h1>
              
              {newList}
              {this.props.deleteItem}

            
            </div>
      );
    }
  }
  
  export default Dashboard;