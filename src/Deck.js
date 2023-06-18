import React, { useState } from 'react';

// Create DeckForm component
const DeckForm = ({ onCreateDeck }) => {
  const [faction, setFaction] = useState('');
  const [deckName, setDeckName] = useState('');

  const handleFactionChange = (e) => {
    setFaction(e.target.value);
  };

  const handleDeckNameChange = (e) => {
    setDeckName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateDeck({ faction, deckName });
    setFaction('');
    setDeckName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Faction:
        <select value={faction} onChange={handleFactionChange}>
          <option value="faction1">Faction 1</option>
          <option value="faction2">Faction 2</option>
          <option value="faction3">Faction 3</option>
        </select>
      </label>
      <br />
      <label>
        Deck Name:
        <input type="text" value={deckName} onChange={handleDeckNameChange} />
      </label>
      <br />
      <button type="submit">Create Deck</button>
    </form>
  );
};

// Create Deck component
const Deck = ({ deck, onDeleteDeck, onAddCard, onMoveCard }) => {
  const { faction, deckName, cards } = deck;

  const handleDeleteDeck = () => {
    onDeleteDeck(deck);
  };

  const handleAddCard = () => {
    onAddCard(deck);
  };

  const handleMoveCard = () => {
    onMoveCard(deck);
  };

  return (
    <div>
      <h3>Deck Name: {deckName}</h3>
      <p>Faction: {faction}</p>
      <button onClick={handleDeleteDeck}>Delete Deck</button>
      <button onClick={handleAddCard}>Add Card</button>
      <button onClick={handleMoveCard}>Move Card</button>
      <hr />
      <h4>Cards:</h4>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
    </div>
  );
};

// Create Decks component
const Decks = ({ decks, onDeleteDeck, onAddCard, onMoveCard }) => {
  return (
    <div>
      <h2>Your Decks:</h2>
      {decks.map((deck, index) => (
        <Deck
          key={index}
          deck={deck}
          onDeleteDeck={onDeleteDeck}
          onAddCard={onAddCard}
          onMoveCard={onMoveCard}
        />
      ))}
    </div>
  );
};

// Create main App component
const App = () => {
  const [decks, setDecks] = useState([]);

  const handleCreateDeck = (newDeck) => {
    setDecks([...decks, { ...newDeck, cards: [] }]);
  };

  const handleDeleteDeck = (deckToDelete) => {
    const updatedDecks = decks.filter((deck) => deck !== deckToDelete);
    setDecks(updatedDecks);
  };

  const handleAddCard = (deckToAddCard) => {
    const cardName = prompt('Enter the card name:');
    if (cardName) {
      const updatedDecks = decks.map((deck) => {
        if (deck === deckToAddCard) {
          return { ...deck, cards: [...deck.cards, cardName] };
        }
        return deck;
      });
      setDecks(updatedDecks);
    }
  };

  const handleMoveCard = (sourceDeck) => {
    const cardName = prompt('Enter the card name to move:');
    if (cardName) {
      const targetDeck = prompt('Enter the target deck name:');
      if (targetDeck) {
        const updatedDecks = decks.map((deck) => {
          if (deck === sourceDeck) {
            return { ...deck, cards: deck.cards.filter((card) => card !== cardName) };
          } else if (deck.deckName === targetDeck) {
            return { ...deck, cards: [...deck.cards, cardName] };
          }
          return deck;
        });
        setDecks(updatedDecks);
      }
    }
  };

  return (
    <div>
      <h1>Create a Deck</h1>
      <DeckForm onCreateDeck={handleCreateDeck} />
      <Decks
        decks={decks}
        onDeleteDeck={handleDeleteDeck}
        onAddCard={handleAddCard}
        onMoveCard={handleMoveCard}
      />
    </div>
  );
};

export default App;
