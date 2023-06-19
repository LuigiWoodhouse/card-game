import React, { useState } from 'react';
import CardFilter from './components/CardFilter';
import CardListControls from './components/CardListControls';
import Cards from './components/Cards';
import CreateDeck from './components/CreateDeck';
import DeckCardControls from './components/DeckCardControls';
import FactionButtons from './components/FactionButtons';
import Menu from './components/Menu';
import PaginationButtons from './components/PaginationButtons';
import SelectDeck from './components/SelectDeck';
import Breadcrumb from './components/Breadcrumb';

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
const Deck = ({ faction, deckName }) => {
  return (
    <div>
      <h3>Deck Name: {deckName}</h3>
      <p>Faction: {faction}</p>
    </div>
  );
};

// Create Decks component
const Decks = ({ decks }) => {
  return (
    <div>
      <h2>Your Decks:</h2>
      {decks.map((deck, index) => (
        <Deck key={index} faction={deck.faction} deckName={deck.deckName} />
      ))}
    </div>
  );
};



const menuItems = [
  { id: 1, name: 'Menu 1' },
  { id: 2, name: 'Menu 2' },
  { id: 3, name: 'Menu 3' },
];

const breadcrumbPath = ['Home', 'Category', 'Subcategory'];

const decks = [
  { id: 1, name: 'Deck 1' },
  { id: 2, name: 'Deck 2' },
  { id: 3, name: 'Deck 3' },
];

const cards = [
  { id: 1, name: 'Card 1', description: 'Description 1' },
  { id: 2, name: 'Card 2', description: 'Description 2' },
  { id: 3, name: 'Card 3', description: 'Description 3' },
];

const handleCreateDeck = (deckName) => {
  // Handle deck creation
};

const handleSelectDeck = (deckId) => {
  // Handle deck selection
};

const handleCardSortChange = (sortBy) => {
  // Handle card sort change
};

const handleCardFilterChange = (filterValue) => {
  // Handle card filter change
};

const handleFactionSelect = (factionId) => {
  // Handle faction selection
};

const handleCardAdd = (cardName) => {
  // Handle adding a card to a deck
};

const handleCardMove = (cardName) => {
  // Handle moving a card to another deck
};



// Create main App component
const App = () => {
  const [decks, setDecks] = useState([]);

  const handleCreateDeck = (newDeck) => {
    setDecks([...decks, newDeck]);
  };

  return (
    <div>
      <h1>Create a Deck</h1>
      <DeckForm onCreateDeck={handleCreateDeck} />
      <Decks decks={decks} />

      <Menu items={menuItems} activeItem="Menu 1" onItemClick={(itemId) => console.log(itemId)} />
      <Breadcrumb path={breadcrumbPath} />
      <CardListControls
        onSortChange={(sortBy) => handleCardSortChange(sortBy)}
        onFilterChange={(filterValue) => handleCardFilterChange(filterValue)}
      />
      <CardFilter filterValue="" onFilterChange={(filterValue) => handleCardFilterChange(filterValue)} />
      <FactionButtons
        factions={[{ id: 1, name: 'Faction 1' }, { id: 2, name: 'Faction 2' }, { id: 3, name: 'Faction 3' }]}
        selectedFaction={1}
        onFactionSelect={(factionId) => handleFactionSelect(factionId)}
      />
      <CreateDeck onCreateDeck={(deckName) => handleCreateDeck(deckName)} />
      <SelectDeck
        decks={decks}
        selectedDeck={1}
        onSelectDeck={(deckId) => handleSelectDeck(deckId)}
      />
      <PaginationButtons totalPages={5} currentPage={1} onPageChange={(page) => console.log(page)} />
      <Cards cards={cards} />
      <DeckCardControls onAddCard={(cardName) => handleCardAdd(cardName)} onMoveCard={(cardName) => handleCardMove(cardName)} />
    </div>


  );
};

export default App;
