import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
 _showInfoStatus(product){
   if(product.status){
     return (
     <h3>
       {product.id}
      {product.name}
      Status: {product.status?'Active':'Inactive'}
    </h3>
     );
   }
 }
  render() {
    var product={
      id:"1",
      name:"pink",
      status:"true"
     };
     var users=[
      {
        id:"1",
        name:"tan",
        age:"23"
      },
      {
        id:"2",
        name:"ngoc",
        age:"21"
      },
      {
        id:"3",
        name:"nguyen",
        age:"25"
      }
     ];
     var elements=users.map((item, index)=>{
      return (
        <div key={index}>
          <h2>{item.name}</h2>
            <h2>{item.age}</h2>
        </div>
      );
     });

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
      <div className="ml-30">
          {this._showInfoStatus(product)}
         
      </div>
      {elements}
       
        
      </div>
    );
  }
}

export default App;
