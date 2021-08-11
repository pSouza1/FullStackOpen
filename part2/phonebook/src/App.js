import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const addNames = (event) => {
    event.preventDefault();

    let duplicates = persons.find((person) => person.name === newName);

    if (duplicates !== undefined) {
      window.alert(newName + ' is already added to phonebook');
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

    const handleNumberChange = (event) => {
      console.log(event.target.value);
      setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
};

let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch))

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
      <form> filter shown with <input value={newSearch} onChange={handleSearchChange}/> </form>
      </div>


      <h2>add a new</h2>
      <form onSubmit={addNames}>
        <div>
          name: 
          <input value={newName} onChange={handlePersonChange} />
        </div>

        <div>
          number: 
          <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}> {person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
