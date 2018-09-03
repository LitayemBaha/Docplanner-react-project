import React, { Component } from 'react';

class WebCountryPage extends Component {
    render(props) {
      return (<div className="web-country-page">
    <a href={this.props.countryLink}>
        <div className="img-warsaw">
            <img src={this.props.countryImage} alt=""/>
        </div>
        <h1 className="title-country-page">{this.props.countrytitle}</h1>
        <div className="web-country-button">
            <button>SEE OPENING</button>
        </div>
    </a>
</div>)
    }
  }
  export default WebCountryPage;