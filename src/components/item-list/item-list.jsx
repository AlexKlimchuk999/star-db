import React from 'react';

import './item-list.css';


const ItemList = (props) => {

  const {onItemSelected, children: renderLabel} = props;

  const { data } = props;

  const items = data.map((item) => {
    const { id } = item;

    const label = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  })

  return (
    <ul className="item-list list-group mt-5">
      {items}
    </ul>
  );
}

export default ItemList;