import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="thumbnail">
              <img data-src="#" alt=""/>
              <div className="caption">
                  <h3>Orange</h3>
                  <p>
                      $10.000
                  </p>
             
             <button type="button" className="btn btn-default">Buy</button>
             
              </div>
          </div>
      </div>
      
     
    );
  }
}

export default Product;