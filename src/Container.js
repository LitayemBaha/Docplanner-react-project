import React, { Component } from 'react';

class Container extends Component {
    render() {
      return (<div className="containerClass">
        <div className="logo-img"><img src="https://www.docplanner.com/img/sygnet.png" alt=""/></div>
        <h1 className="title">Making the healthcare experience more human</h1>
        <div className="text-section">
             <p className="parag">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
             <p className="parag">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
         </div>
        </div>
      )
    }
  }
  export default Container;