const FactionButtons = ({ factions, selectedFaction, onFactionSelect }) => {
    return (
      <div>
        <h2>Faction Buttons</h2>
        {factions.map((faction) => (
          <button
            key={faction.id}
            onClick={() => onFactionSelect(faction.id)}
            className={selectedFaction === faction.id ? 'active' : ''}
          >
            {faction.name}
          </button>
        ))}
      </div>
    );
  };
  
  export default FactionButtons