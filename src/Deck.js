import React, { useState } from 'react';

const Decks = () => {
  const [factions, setFactions] = useState([]);
  const [decks, setDecks] = useState([]);
  const [selectedFaction, setSelectedFaction] = useState('');
  const [deckName, setDeckName] = useState('');
  const [card, setCard] = useState(''); // Add card and setCard state variables

  const createDeck = () => {
    const newDeck = {
      faction: selectedFaction,
      name: deckName,
      cards: []
    };

    setDecks([...decks, newDeck]);
    setSelectedFaction('');
    setDeckName('');
  };

  const deleteDeck = (deckIndex) => {
    const updatedDecks = decks.filter((_, index) => index !== deckIndex);
    setDecks(updatedDecks);
  };

  const addCardToDeck = (card) => {
    if (decks.length === 0) {
      return; // No decks exist yet, so we can't add the card
    }
  
    const updatedDecks = [...decks];
    updatedDecks[updatedDecks.length - 1].cards.push(card);
    setDecks(updatedDecks);
    setCard(''); // Clear the input field after adding the card
  };
  

  const moveCardToDeck = (cardIndex, targetDeckIndex) => {
    const updatedDecks = [...decks];
    const card = updatedDecks[cardIndex].cards.pop();
    updatedDecks[targetDeckIndex].cards.push(card);
    setDecks(updatedDecks);
  };

  return (
    <div>
      <h2>Create a Deck</h2>
      <label htmlFor="faction">Select a Faction:</label>
      <select
        id="faction"
        value={selectedFaction}
        onChange={(e) => setSelectedFaction(e.target.value)}
      >
        <option value="">Select Faction</option>
        {factions.map((faction) => (
          <option key={faction} value={faction}>
            {faction}
          </option>
        ))}
      </select>

      <label htmlFor="deckName">Name a Deck:</label>
      <input
        type="text"
        id="deckName"
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
      />

      <button onClick={createDeck}>Create Deck</button>

      <h2>List of Deck Items</h2>
      {decks.map((deck, index) => (
        <div key={index}>
          <h3>{deck.name}</h3>
          <p>Faction: {deck.faction}</p>
          <button onClick={() => deleteDeck(index)}>Delete Deck</button>
        </div>
      ))}

      <h2>Add a Card to a Deck</h2>
      <input type="text" value={card} onChange={(e) => setCard(e.target.value)} />
      <button onClick={() => addCardToDeck(card)}>Add Card</button>

      <h2>Move a Card to another Deck</h2>
      {decks.map((deck, deckIndex) => (
        <div key={deckIndex}>
          <h3>{deck.name}</h3>
          {deck.cards.map((card, cardIndex) => (
            <div key={cardIndex}>
              <p>{card}</p>
              {decks.map((targetDeck, targetDeckIndex) => {
                if (targetDeckIndex !== deckIndex) {
                  return (
                    <button key={targetDeckIndex} onClick={() => moveCardToDeck(cardIndex, targetDeckIndex)}>
                      Move to {targetDeck.name}
                    </button>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Decks;
