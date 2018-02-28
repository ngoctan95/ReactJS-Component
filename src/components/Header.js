import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      
      <div className="App">
       
       <nav className="navbar navbar-inverse">
         
         <ul className="nav navbar-nav">
           <li className="active">
             <a >Home</a>
           </li>
           <li>
             <a >Link</a>
           </li>
         </ul>
       </nav>
       
      </div>
    );
  }
}

export default Header;