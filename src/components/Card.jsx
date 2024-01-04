import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import Image from './Image';
import './card.css';

const Card = () => {
  return (
    <div className="card">
      <Image />
      <Title />
      <Paragraph />
    </div>
  );
};

export default Card;
