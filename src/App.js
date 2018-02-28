import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
 
  render() {
    var product={
      id:"1",
      name:"pink"
     };
    return (
      <div className="App">
        
         <Header/>
       <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          
          <Product/>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product/>
        </div>
      </div>
      <div>
        <h2>{product.id}</h2>
        <h2>{product.name}</h2>
        </div>
      
       
        
      </div>
    );
  }
}

export default App;
