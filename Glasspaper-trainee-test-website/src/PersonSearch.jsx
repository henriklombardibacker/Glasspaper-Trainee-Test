import React, { useState } from 'react';
import persons from './persons';

const PersonSearch = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);

  const handleShowHobbies = (person) => {
    setSelectedPerson(person);
  };

  const handleSearch = () => {
    const foundPerson = persons.find(
      (person) => person.name.toLowerCase() === searchName.toLowerCase()
    );

    if (foundPerson) {
      setSelectedPerson(foundPerson);
      setUserNotFound(false);
    } else {
      setUserNotFound(true);
      setSelectedPerson(null);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {userNotFound ? (
        <p>User not found with "{searchName}"</p>
      ) : (
        <div>
          {selectedPerson ? (
            <div>
              <p>Name: {selectedPerson.name}</p>
              <p>Age: {selectedPerson.age}</p>
              <button onClick={() => handleShowHobbies(selectedPerson)}>
                Show Hobbies
              </button>
              {selectedPerson.hobbies && (
                <div>
                  <p>Hobbies: {selectedPerson.hobbies.name}</p>
                  <p>Type: {selectedPerson.hobbies.type}</p>
                </div>
              )}
            </div>
          ) : (
            <p>Please search for a person.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonSearch;
