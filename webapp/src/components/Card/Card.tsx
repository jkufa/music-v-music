import React, { useState } from 'react';
import { MusicCard } from '../Types/MusicCard';
import './Card.scss';

type Props = {
  card: MusicCard;
  isSelected: boolean;
  setSelectedCardFn: (card: MusicCard) => void;
};

const Card = (props: Props) => {

  return (
    <div
      tabIndex={0}
      className={props.isSelected ? 'card-container selected' : 'card-container'}
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
