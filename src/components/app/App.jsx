import React, { Component } from 'react'
import ErrorBoundry from '../error-boundry/error-boundry'
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import SwapiService from '../../services/swapi-sevice';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';

import { BrowserRouter as Router,Routes, Route, Navigate, useParams } from 'react-router-dom';

import './App.css'
import StarshipDetails from '../sw-components/starship-details';


function StarshipDetailsWrapper() {
  const {id } = useParams();
  console.log(id); // ID звездолёта из URL

  return <StarshipDetails itemId={id} />;
}
export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
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

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="container-fluid">
              <Header onServiceChange={this.onServiceChange} />

              <RandomPlanet />

              <Routes>
                  <Route path='/' element={<h2>Hello words</h2>} />
                  <Route path='/people/:id?' element={<PeoplePage/>}/>
                  <Route path='/planets' element={<PlanetsPage/>}/>
                  <Route path='/starships' element={<StarshipsPage/>}/>

                  <Route path="/starships/:id" element={<StarshipDetailsWrapper />} />

                  <Route path="/login" element={<LoginPage 
                    isLoggedIn={isLoggedIn} 
                    onLogin={this.onLogin}/>}/>
                  <Route path="/secret" element={<SecretPage isLoggedIn={isLoggedIn}/>}/>

                  <Route path="*" element={<h2>Page not found</h2>} />
              </Routes>
              
            </div>
          </Router>
        </SwapiServiceProvider>
       </ErrorBoundry>
    );
  }
 
};