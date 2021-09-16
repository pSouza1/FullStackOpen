import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numbersService from './services/numbers'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const [message, setMessage] = useState(null)
  const [classNameStyle, setClassNameStyle] = useState(null)


  useEffect(() => {
    console.log('effect')
    numbersService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addNames = (event) => {
    event.preventDefault();

    let duplicates = persons.find((person) => person.name === newName);

    if (duplicates !== undefined) {
      
      if (window.confirm(newName + " is already added on the phonebook, replace the old number with a new one?")) {

        const changedPerson = persons.find(n => n.name === newName)
        console.log(changedPerson)
  
        changedPerson.number = newNumber
        console.log(changedPerson)
  
        numbersService
        .update(changedPerson.id, changedPerson)
        .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== changedPerson.id ? p : returnedPerson))
        setMessage("Updated " + returnedPerson.name)
        setClassNameStyle("added")
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };

      numbersService
      .create(personObject)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage("Added " + personObject.name)
        setClassNameStyle("added")
        setNewName("")
        setNewNumber("")
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        })
    }
  }

  const deleteName = (id) => {
    
    const personToDelete = persons.find(person => person.id === id)

    if (window.confirm("Delete " + personToDelete.name + " ?")) {

      numbersService
      .deleteIndex(id)
      .then(() => {
        setPersons(persons.filter(person=> person.id !== id))
      })
      .catch( () => {
        setMessage(
          `Information of ${personToDelete.name} has already been removed from server`
        )
        setClassNameStyle("removed")
        setTimeout(() => {
          setMessage(null)
        }, 5000)})
    }
  }

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

  const handleDelete = (index) => {
    console.log(index);
    deleteName(index)
};


let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} classNameStyle={classNameStyle} />

      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange}/>

      <h2>add a new</h2>

      <PersonForm addNames={addNames} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}/>

     </div>
  );
};

export default App;
