const Cards = ({ cards }) => {
    return (
      <div>
        <h2>Cards</h2>
        {cards.map((card) => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards