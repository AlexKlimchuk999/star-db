import React, { Component } from 'react';

import SwapiService from '../../services/swapi-sevice';
import ErrorButton from '../error-button/error-button';
import './item-details.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item:null,
    image:null,
  };

  componentDidMount() {
    this.updateItem()

  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }
  
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image:getImageUrl(item)
          })
      })

  }

  render() {
   
    const { item,image } = this.state

    if(!item) {
      return <span>Select a item from a list</span>
    }

    const {id, name} = item;
    return (
  <div className="item-details card">

    <img className="item-image"
      src={image} />

    <div className="card-body">
      <h4>{name} {id}</h4>
      <ul className="list-group list-group-flush">
       {
        React.Children.map(this.props.children, (child, inx) => {
          return React.cloneElement(child, { item });
        })
       }
      </ul>
      <ErrorButton />
    </div>
  </div>
    )
  }
}
