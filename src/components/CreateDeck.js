import React, { useState} from 'react';

const CreateDeck = ({ onCreateDeck }) => {
    const [deckName, setDeckName] = useState('');
  
    const handleDeckNameChange = (e) => {
      setDeckName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onCreateDeck(deckName);
      setDeckName('');
    };
  
    return (
      <div>
        <h2>Create Deck</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={deckName} onChange={handleDeckNameChange} placeholder="Enter deck name" />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  };

  export default CreateDeck
  