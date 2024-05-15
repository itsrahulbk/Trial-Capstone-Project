import React from 'react';
import './Card.css';

const Card = ({ title, image, children }) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{children}</p>
    </article>
  );
};

export default Card;
