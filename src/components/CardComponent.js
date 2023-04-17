import React from 'react';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <div className="card">
      <img  className="img-card" src={props.img} alt="image de prfl"/>
      <h3>User Name :{props.Name}</h3>
      <h3>Id User : {props.id} </h3> 
      <p>User Phone: {props.Phone}</p>
      <p>User Email : {props.Email}</p>
    </div>
  );
}

export default CardComponent;
