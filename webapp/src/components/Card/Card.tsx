import React, { useState } from 'react';
import { MusicCard } from '../Types/MusicCard';
import './Card.scss';

type Props = {
  card: MusicCard;
  setSelectedCardFn: (card: MusicCard) => void;
};

const Card = (props: Props) => {
  const [isSelected, setSelected] = useState(false);

  const selectCard = (card: MusicCard) => {
    console.log('clicked');
  };

  const onEnterKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(typeof e);
    if (e.keyCode === 13) {
      // Enter key
    }
  };

  return (
    <div
      tabIndex={0}
      className={isSelected ? 'card-container selected' : 'card-container'}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          props.setSelectedCardFn(props.card);
        }
      }}
      onClick={() => {
        props.setSelectedCardFn(props.card);
      }}
    >
      <div className='col-1'>
        <img src={props.card.artwork}></img>
      </div>
      <div className='col-2'>
        <div className='title'>{props.card.title}</div>
        <div className='artist'>{props.card.artist}</div>
      </div>
    </div>
  );
};

export default Card;
