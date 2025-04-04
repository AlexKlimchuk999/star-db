import React, { Component } from 'react';
import SwapiService from '../../services/swapi-sevice'
import Spiner from '../spiner/spiner';
import ErrorIndicator from '../error-indicator/error-indicator';
import PropTypes from 'prop-types';
import './random-planet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000,
  }
  
  static propTypes = {
   updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading:true,
  }

  componentDidMount() {
    const { updateInterval } = this.props
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error:false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading:false
    });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17+2);
    this.swapiService.getPlanets(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {

    const {planet, loading, error} = this.state;

    const hasDate = !(loading || error)
    const erroMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spiner/> : null;
    const content = hasDate ? <PlanetView planets={planet} /> : null;

    if(loading) {
      return <Spiner/>
    }

    return (
      <div className="random-planet jumbotron rounded mt-5">
        {erroMessage}
        {spinner}
        {content}
      </div>
    );
  }

}

// RandomPlanet.defaultProps = {
//   updateInterval: 10000
// }

const PlanetView = ({planets}) => {
  const {id,name, population, rotationPeriod, diameter} = planets
  return (
    <>
      <img className="planet-image"
             src={`/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </>
  )
}