import React, { Component } from 'react';
import axios from 'axios'; 

class Form extends Component {
    constructor(props) {
      super(props);

        this.state = {
          products: [],
          image: '',
          product: '',
          price: ''
        };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleClick = this.handleClick.bind(this); 
        this.addProduct= this.addProduct.bind(this);
      }
    handleImageChange(event) {
      console.log(event);
      
      this.setState({image: event.target.value});
    }
    handleProductChange(event) {
      this.setState({product: event.target.value});
    }
    handlePriceChange(event) {
      this.setState({price: event.target.value});
    }
    handleClick(e){
        this.setState({
          image: '',
          product: '',
          price: ''
      })
    }

    addProduct(){
    const  newProduct = {
        name: this.state.name,
        price: this.state.price,
        imageurl:this.state.imageurl
      }
      axios.post('/api/product/product', newProduct).then((res)=>{
          this.setState({products: res.data})
      })
    }

    render() {
      
      
      return (
        <div>
            <h1> Form </h1>
            <div className = "box">
            <form>
              
                <label>Image URL: 
                    <input type="text" name="image" onChange={this.handleImageChange} />
                </label>
              <br/>
              
              
                <label> Product Name:
                    <input type="text" name="product" onChange={this.handleProductChange}/>
                  </label>
              <br/>

              
                <label> Price:
                  <input type="text" name="price" onChange={this.handlePriceChange}/>
                </label>
              <br/>

              <button onClick={(e) => this.addProduct(e)}> Add to inventory</button>
              <button onClick={(e) => this.handleClick(e)}> Cancel </button>

              </form>
              </div>
            </div>
      );
    }
  }
  
  export default Form;