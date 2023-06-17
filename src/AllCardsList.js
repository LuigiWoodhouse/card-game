import React, { useState, useEffect } from 'react';

const AllCardsList = () => {
  const [people, setPeople] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch the people data from the API
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();

        let sortedPeople = [...data.results];

        if (sortBy === 'alphabetical') {
          sortedPeople.sort((a, b) => (a.name < b.name ? 1 : -1));
        } else if (sortBy === 'youngest') {
          sortedPeople.sort((a, b) => (parseInt(a.birth_year) > parseInt(b.birth_year) ? 1 : -1));
        } else if (sortBy === 'eldest') {
          sortedPeople.sort((a, b) => (parseInt(a.birth_year) < parseInt(b.birth_year) ? 1 : -1));
        }

        // Filter the people list based on search query
        const filteredPeople = sortedPeople.filter(person =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setPeople(filteredPeople);
      } catch (error) {
        console.log('Error fetching people:', error);
      }
    };

    fetchPeople();
  }, [sortBy, searchQuery]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="sortSelect">Sort By:</label>
        <select id="sortSelect" value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="alphabetical">Alphabetical (Descending)</option>
          <option value="youngest">Youngest</option>
          <option value="eldest">Eldest</option>
        </select>
      </div>
      <div>
        <label htmlFor="searchInput">Search:</label>
        <input id="searchInput" type="text" value={searchQuery} onChange={handleSearchChange} />
      </div>
      {people.map((person) => (
        <div key={person.name}>
          <h2>{person.name}</h2>
          <p>Gender: {person.gender}</p>
          <p>Birth Year: {person.birth_year}</p>
        </div>
      ))}
    </div>
  );
};

export default AllCardsList;
