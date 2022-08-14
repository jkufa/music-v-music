import React from 'react';
import Card from '../Card/Card';
import { MusicCard } from '../Types/MusicCard';
import './CardManager.scss';

type Props = {
  musicCards: MusicCard[];
  winningCard?: MusicCard;
  setSelectedCardFn: (card: MusicCard) => void;
};

const CardManager = (props: Props) => {
  return (
    <div className='cards-container'>
      {props.winningCard ? (
        <Card setSelectedCardFn={props.setSelectedCardFn} card={props.winningCard} />
      ) : (
        props.musicCards.map((musicCard, i) => (
          <Card key={i} setSelectedCardFn={props.setSelectedCardFn} card={musicCard} />
        ))
      )}
    </div>
  );
};

export default CardManager;
