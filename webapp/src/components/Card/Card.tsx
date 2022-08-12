import React from 'react';
import './Card.scss';

type Props = {
  artist: string;
  title: string;
  artwork: string;
};

const Card = (props: Props) => {
  return (
    <div className='card-container'>
      <div className='col-1'>
        <img src={ props.artwork }></img>
      </div>
      <div className='col-2'>
        <div className='title'>
          { props.title }
        </div>
        <div className='artist'>
          { props.artist }
        </div>
      </div>
    </div>
  );
}

export default Card;