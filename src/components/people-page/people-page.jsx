import React, {Component} from "react";
import ItemList from "../item-list/item-list";
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from '../../services/swapi-sevice';
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";


import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 1,
  }

      
  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    if(this.state.hasError){
     return <ErrorIndicator/>
    } 

    const itemList = (
      <ErrorBoundry>
        <ItemList getData={this.swapiService.getAllPeople}  
          onItemSelected={this.onItemSelected}>
            { (i) =>  (
              `${i.name} (${i.gender}, ${i.birthYear})` 
          )}
        </ItemList>
      </ErrorBoundry>
    )

    const persoDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem}/>
      </ErrorBoundry>
    )

    return (
  
        <Row left={itemList} right={persoDetails}/>
      
    )
  }
}