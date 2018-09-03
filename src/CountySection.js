import React, { Component } from 'react';

class CountySection extends Component {
    render(props) {
      return (<div className="country">
        <h2 className="country-text">We are a global company with local culture</h2> 
        <ul className="country-list">
          <li className="country-element"><a href="https://www.znanylekarz.pl/?_ga=2.16710192.787098387.1531307208-1016814441.1531307208">ZanyLecarz</a></li>
          <li className="country-element"><a href="https://www.doctoralia.es/">Doctoralia</a></li>
          <li className="country-element"><a href="https://www.miodottore.it/?_ga=2.244708739.787098387.1531307208-1016814441.1531307208">MioDottore</a></li>
          <li className="country-element"><a href="https://www.doktortakvimi.com/?_ga=2.257357069.787098387.1531307208-1016814441.1531307208">DoctorTakvimi</a></li>
          <li className="company-element-list"><a href="https://www.ismertorvos.hu/">Ismertorvos</a></li>
          <li className="element-list"><a href="https://www.znamylekar.cz/">ZnamyLekar</a></li>
       </ul>
     </div>)
  }
}
export default CountySection;
