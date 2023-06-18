import React, { useState} from 'react';

const DeckCardControls = ({ onAddCard, onMoveCard }) => {
    const [cardName, setCardName] = useState('');
  
    const handleCardNameChange = (e) => {
      setCardName(e.target.value);
    };
  
    const handleAddCard = () => {
      onAddCard(cardName);
      setCardName('');
    };
  
    const handleMoveCard = () => {
      onMoveCard(cardName);
      setCardName('');
    };
  
    return (
      <div>
        <h2>Deck & Card Controls</h2>
        <input type="text" value={cardName} onChange={handleCardNameChange} placeholder="Enter card name" />
        <button onClick={handleAddCard}>Add Card</button>
        <button onClick={handleMoveCard}>Move Card</button>
      </div>
    );
  };

  export default DeckCardControls