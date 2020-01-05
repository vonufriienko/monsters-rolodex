import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardListComponent = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};

export default CardListComponent;