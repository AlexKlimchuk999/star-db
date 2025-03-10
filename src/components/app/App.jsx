import React, { Component } from 'react'
import ErrorBoundry from '../error-boundry/error-boundry'
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import SwapiService from '../../services/swapi-sevice';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';

import {   
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import './App.css'

export default class App extends Component {
  swapiService = new DummySwapiService();

  render(){

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllStarship,
      getAllPeople,
      getAllPlanets
    } = this.swapiService;


    return (
      // <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container-fluid">
            <Header />

            <PersonDetails itemId={11}/>
            <PlanetDetails itemId={5}/>
            <StarshipDetails itemId={9}/>

            <PersonList/>

            <StarshipList/>

            <PlanetList/>
          </div>
        </SwapiServiceProvider>
      // </ErrorBoundry>
    );
  }
 
};