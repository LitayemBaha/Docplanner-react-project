import React, { Component } from 'react';



class Header extends Component {
    render(props) {
      return (<div className="header">
        <div className="logo">
           <a href={this.props.linkLogo}>
             <img src={this.props.linkImg} width="200" alt={this.props.altImg}/>
           </a>
        </div>
        <nav className="info-container">
          <ul className="info-list">
            <li><a className=" info-item about-us" href="https://">about us</a></li>
            <li><a className="info-item career" href="https://">Career</a></li>
            <li><a className="info-item department" href="https://">department</a></li>
          </ul>
        </nav>
       </div>)
    }
  }
  export default Header;