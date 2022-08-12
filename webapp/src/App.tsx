import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card artist='Frank Ocean' title='Sweet Life' artwork='https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'/>
      <Card artist='Kanye West' title='Hell Of A Life' artwork='https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF_ALT.jpg'/>
      <div className='buttons'>
        <Button text='Confirm'/>
        <Button text='Cancel'/>
      </div>
    </div>
  );
}

export default App;
