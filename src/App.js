import './App.css';

import AllCardsList from './AllCardsList';
import './AllCardsList.css';

//import Deck from './Deck';

// import Breadcrumb from './components/Breadcrumb';
// import CardFilter from './components/CardFilter';
// import CardListControls from './components/CardListControls';
// import Cards from './components/Cards';
// import CreateDeck from './components/CreateDeck';
// import DeckCardControls from './components/DeckCardControls';
// import FactionButtons from './components/FactionButtons';
// import Menu from './components/Menu';
// import PaginationButtons from './components/PaginationButtons';
// import SelectDeck from './components/SelectDeck';

function App() {
  // // Sample data for demonstration purposes
  // const menuItems = [
  //   { id: 1, name: 'Menu 1' },
  //   { id: 2, name: 'Menu 2' },
  //   { id: 3, name: 'Menu 3' },
  // ];

  // const breadcrumbPath = ['Home', 'Category', 'Subcategory'];

  // const decks = [
  //   { id: 1, name: 'Deck 1' },
  //   { id: 2, name: 'Deck 2' },
  //   { id: 3, name: 'Deck 3' },
  // ];

  // const cards = [
  //   { id: 1, name: 'Card 1', description: 'Description 1' },
  //   { id: 2, name: 'Card 2', description: 'Description 2' },
  //   { id: 3, name: 'Card 3', description: 'Description 3' },
  // ];

  // const handleCreateDeck = (deckName) => {
  //   // Handle deck creation
  // };

  // const handleSelectDeck = (deckId) => {
  //   // Handle deck selection
  // };

  // const handleCardSortChange = (sortBy) => {
  //   // Handle card sort change
  // };

  // const handleCardFilterChange = (filterValue) => {
  //   // Handle card filter change
  // };

  // const handleFactionSelect = (factionId) => {
  //   // Handle faction selection
  // };

  // const handleCardAdd = (cardName) => {
  //   // Handle adding a card to a deck
  // };

  // const handleCardMove = (cardName) => {
  //   // Handle moving a card to another deck
  // };

  return (
    <div>
      <h1>All Cards</h1>
      <AllCardsList />

      {/* <h1>Deck</h1> */}
      {/* <Deck /> */}

      {/* Render additional components */}
      {/* <Menu items={menuItems} activeItem="Menu 1" onItemClick={(itemId) => console.log(itemId)} />
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
      <DeckCardControls onAddCard={(cardName) => handleCardAdd(cardName)} onMoveCard={(cardName) => handleCardMove(cardName)} /> */}
    </div>
  );
}

export default App;
