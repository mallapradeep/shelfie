import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
        list:[
          {
          name:'Shoe',
          price:'20',
          image: 'shoe.jpg'
        },
        {
          name:'Shirt',
          price:'10',
          image: 'shirt.jpg'
        }
      ]
    }
  }
  componentDidMount() {
    axios.get('/api/inventory')
      .then(res => {
    console.log(res);
    
      //  this.setState({   });
      });

  }

  render() {
    return (
      <div className="App">
       
      <Dashboard />
      <Form />
      <Header />
        
      </div>
    );
  }
}

export default App;
