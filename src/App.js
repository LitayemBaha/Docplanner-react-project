import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Container from './Container';
import ImagePage from './ImagePage';
import CountySection from './CountySection';
import Platform from './Platform';
import PlatformStat from './PlatformStat';
import Definition from './Definition';
import WebCountryPage from './WebCountryPage';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render() {
    return (
      <div className="body">
        <Header/>
        <Container/>
        <div className="images-section">
           <ImagePage
              imagePageTitle="For patients"
              imagePageParag="Find a doctor, book a visit and solve any health-related doubt"
              imagePageCountry="country"
              imagePage="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
           <ImagePage
              imagePageTitle="For doctors"
              imagePageParag="Save time managing visits and cut no-shows by half"
              imagePageCountry="country visibility"
              imagePage="https://www.docplanner.com/img/screen-saas@2x.png"/>
         </div>
         <CountySection/>
         <div className="platform-section">
            <Platform/>
            <div className="statistic-section">
              <PlatformStat
                 logoStat="https://www.docplanner.com/img/flag@2x.png"
                 titleStat="Leader in 8 countries"
                 paragraphStat="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"/>
              <PlatformStat
                 logoStat="https://www.docplanner.com/img/patients.png"
                 titleStat="20 million unique patients"
                 paragraphStat="visit us every month"/>
            </div>
            <div className="statistic-section">
              <PlatformStat
                 logoStat="https://www.docplanner.com/img/visits.png"
                 titleStat="600 000 appointments"
                 paragraphStat="booked last month"/>
              <PlatformStat
                 logoStat="https://www.docplanner.com/img/doctors.png"
                 titleStat="35 000 active doctors"
                 paragraphStat="trust in our solutions"/>
            </div>
         </div>
         <Definition/>
         <div className="web-country">
           <WebCountryPage
              countryLink="https://"
              countryImage="https://www.docplanner.com/img/doctors.png"
              countrytitle="Warsaw"/>
            <WebCountryPage
              countryLink="https://"
              countryImage="https://www.docplanner.com/images/barcelona.png"
              countrytitle="Barcelone"/>
            <WebCountryPage
              countryLink="https://"
              countryImage="https://www.docplanner.com/images/istanbul.png"
              countrytitle="Istanbul"/>
            <WebCountryPage
              countryLink="https://"
              countryImage="https://www.docplanner.com/images/rome.png"
              countrytitle="Rome"/>
            <WebCountryPage
              countryLink="https://"
              countryImage="https://www.docplanner.com/images/mexico-city@2x.png"
              countrytitle="Mexico-city"/>
            <WebCountryPage
              countryLink="https://"
              countryImage="https://www.docplanner.com/images/curitiba.png"
              countrytitle="Curitiba"/>
         </div>
         <Footer/>
      </div>)
  }
}

export default App;
