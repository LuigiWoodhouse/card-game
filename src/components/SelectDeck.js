const SelectDeck = ({ decks, selectedDeck, onSelectDeck }) => {
    return (
      <div>
        <h2>Select Deck</h2>
        {decks.map((deck) => (
          <button
            key={deck.id}
            onClick={() => onSelectDeck(deck.id)}
            className={selectedDeck === deck.id ? 'active' : ''}
          >
            {deck.name}
          </button>
        ))}
      </div>
    );
  };
  
  export default SelectDeck