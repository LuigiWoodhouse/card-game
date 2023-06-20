import React, { useState } from 'react';
import './Deck.css';
import { ReactSVG } from 'react-svg';


const Decks = () => {
  const [factions, setFactions] = useState([
    { faction: 'faction1', icon: 'assets/Property 1=Card Details, Property 2=Planet.svg' },
    { faction: 'faction2', icon: 'faction2-icon.svg' },
    { faction: 'faction3', icon: 'faction3-icon.svg' },
    // Add more factions and their SVG file paths
  ]);

  const [decks, setDecks] = useState([]);
  const [selectedFaction, setSelectedFaction] = useState('');
  const [deckName, setDeckName] = useState('');
  const [card, setCard] = useState('');
  const [selectedDeckIndex, setSelectedDeckIndex] = useState(null); // Track the selected deck

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
    setSelectedDeckIndex(null); // Reset the selected deck if it's deleted
  };

  const addCardToDeck = (card) => {
    if (selectedDeckIndex !== null) {
      const updatedDecks = [...decks];
      updatedDecks[selectedDeckIndex].cards.push(card);
      setDecks(updatedDecks);
      setCard(''); // Clear the input field after adding the card
    }
  };

  const moveCardToDeck = (cardIndex, targetDeckIndex) => {
    if (selectedDeckIndex !== null) {
      const updatedDecks = [...decks];
      const card = updatedDecks[selectedDeckIndex].cards.splice(cardIndex, 1)[0];
      updatedDecks[targetDeckIndex].cards.push(card);
      setDecks(updatedDecks);
    }
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
          <option key={faction.faction} value={faction.faction}>
            {faction.faction}
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

      <div className="deck-list">
        {decks.map((deck, index) => {
          const totalCards = deck.cards.length;

          return (
            <div key={index} className="deck-item">
              <h3>{deck.name}</h3>




              <ReactSVG
                src={deck.faction.icon}
                alt={deck.faction.faction}
                className={`faction-icon${selectedFaction === deck.faction.faction ? ' selected' : ''}`}
                onClick={() => setSelectedFaction(deck.faction.faction)}
              />




              <p>Faction: {deck.faction}</p>
              <p>Total Cards: {totalCards}</p>
              <button onClick={() => deleteDeck(index)}>Delete Deck</button>
              <button onClick={() => setSelectedDeckIndex(index)}>Select Deck</button>
              <div className="card">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1.99998L15.5 6.49998L8 11L0.5 6.49998L8 1.99998Z" stroke="#3B3B3B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 9.59999L15.5 10.5L8 15L0.5 10.5L2 9.59999" stroke="#3B3B3B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <button className="plus-svg" onClick={() => deleteDeck(index)}>
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_13_1136)">
                      <path d="M0.5 2.99998H11.5" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.5 2.99998V0.999985H7.5V2.99998" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 4.99998V11C9.5 11.2652 9.39464 11.5196 9.20711 11.7071C9.01957 11.8946 8.76522 12 8.5 12H3.5C3.23478 12 2.98043 11.8946 2.79289 11.7071C2.60536 11.5196 2.5 11.2652 2.5 11V4.99998" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_1136">
                        <rect width="12" height="12" fill="white" transform="translate(0 0.499985)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

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
                    <button
                      key={targetDeckIndex}
                      onClick={() => moveCardToDeck(cardIndex, targetDeckIndex)}
                    >
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
