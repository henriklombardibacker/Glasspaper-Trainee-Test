// PersonList.js
import React, { useState } from 'react';
import persons from './persons';

const PersonList = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleShowHobbies = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <button onClick={() => handleShowHobbies(person)}>
              Show Hobbies
            </button>
            {selectedPerson === person && (
              <div>
                <p>Hobbies: {person.hobbies.name}</p>
                <p>Type: {person.hobbies.type}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
