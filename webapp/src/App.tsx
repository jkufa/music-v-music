import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import CardManager from './components/CardManager/CardManager';
import { MusicCard } from './components/Types/MusicCard';

const musicCards = [
  {
    artist: 'Frank Ocean',
    title: 'Sweet Life',
    artwork: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg',
  },
  {
    artist: 'Kanye West',
    title: 'Hell Of A Life',
    artwork: 'https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF_ALT.jpg',
  },
];

const emptyCard = {
  artist: '',
  title: '',
  artwork: '',
};

function App() {
  const [selectedCard, setSelectedCard] = useState(emptyCard);
  const [isWinner, setWinner] = useState(false);
  const selectCard = (card: MusicCard) => {
    setSelectedCard(card);
  };
  return (
    <div className='App'>
      {isWinner && (
        <h1>
          Winner
        </h1>
      )}
      <CardManager
        musicCards={musicCards}
        winningCard={isWinner ? selectedCard : undefined}
        setSelectedCardFn={selectCard}
      />
      <div className='buttons'>
        {isWinner ? <Button
          text='Next'
          clickEvent={undefined} />
          :
          <Button
            text='Confirm'
            clickEvent={() => {
              if (selectedCard.title)
                  setWinner(true);
            }}
            />
          }
      </div>
    </div>
  );
}

export default App;
