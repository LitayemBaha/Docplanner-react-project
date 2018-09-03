import React, { Component } from 'react';

class PlatformStat extends Component {
    render(props) {
      return (<div className="statistic-item">
    <div className="logo-stat"><img src={this.props.logoStat} alt=""/></div>
    <h3 className="title-stat">{this.props.titleStat}</h3>
    <p className="paragraph-stat">{this.props.paragraphStat}</p>
</div>)
  }
}
export default PlatformStat;
