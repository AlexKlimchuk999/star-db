import React, { Component } from 'react'
import ErrorBoundry from '../error-boundry/error-boundry'
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import SwapiService from '../../services/swapi-sevice';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';


import './App.css'

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
      DummySwapiService : SwapiService;
    
    
        console.log('switched to', Service.name);
        
        return {
        swapiService: new Service()
        }
    })
  }
 
  render(){
    
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container-fluid">
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet />

            <PeoplePage />

            <PlanetsPage />

            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
       </ErrorBoundry>
    );
  }
 
};