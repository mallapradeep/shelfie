import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
      super(props);

        this.state = {
          value:'',
          image: '',
          product: '',
          price: ''
        };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleClick = this.handleClick.bind(this); 
      }
    handleImageChange(event) {
      this.setState({image: event.target.value});
    }
    handleProductChange(event) {
      this.setState({product: event.target.value});
    }
    handlePriceChange(event) {
      this.setState({price: event.target.value});
    }
    handleClick(e){
        console.log()
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

              <button onClick={(e) => this.handleClick(e)}> Add to inventory</button>
              <button onClick={(e) => this.handleClick(e)}> Cancel </button>

              </form>
              </div>
            </div>
      );
    }
  }
  
  export default Form;