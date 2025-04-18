export default class DummySwapiService {

  _imageBase = '../img/';

  _people = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

  _planets = [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanets = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `${this._imageBase}/characters/1.jpg`
  };

  getStarshipImage = () => {
    return `${this._imageBase}/starships/40.jpg`
  };

  getPlanetImage = () => {
    return `${this._imageBase}/planets/21.jpg`
  };
}
