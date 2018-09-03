import React, { Component } from 'react';

class ImagePage extends Component {
    render(props) {
      return (<div className="image-page">
      <h6 className="title-page">{this.props.imagePageTitle}</h6>
      <p className="paragraph-page">{this.props.imagePageParag}</p>
      <select name="country" className={this.props.imagePageCountry} >
          <option value="choose-coutry">CHOOSE COUNTRY</option>
          <option value="argentina">ARGENTINA</option>
          <option value="australia">AUSTRALIA</option>
          <option value="us">US</option>
          <option value="uae">UAE</option>
          <option value="turky">TURKY</option>
          <option value="spain">SPAIN</option>
      </select>
      <div className="image-patients"><img src={this.props.imagePage}width="300" alt="" /></div>
    </div>

    )
  }
}
  export default ImagePage;



