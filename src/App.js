import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
        list: []
    }
    this.getInventory = this.getInventory.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);  }
  componentDidMount() {
    
    axios.get('/api/inventory').then((res) => {
       //console.log(res);
      this.setState({
        list: res.data
      });

      })
    }

    getInventory(){
      axios.get('/api/inventory').then((res) => {
        // console.log(res);
        this.setState({
          list: res.data
        });
    })
  }
    removeProduct(id) {
      axios.delete(`/api/product/${id}`)
     this.setState({list: res.data})
  }

  updateProduct(id) {
    
      const  updatedProduct = {
          name: this.state.name,
          price: this.state.price,
          imageurl:this.state.imageurl
        }
    axios.put(`/api/product/${id}`, updatedProduct )
    this.setState({list: res.data})
  }
    
  render() {
    return (
      <div className="App">
      {console.log(JSON.stringify(this.state.list))}
      {/* {JSON.stringify(this.state.list)} */}
      <Dashboard list={(this.state.list)}
          deleteItem={this.removeProduct} />
      <Form list={(this.state.list)}/>
      <Header /> 
        
      </div>
    );
  }
}

export default App;
