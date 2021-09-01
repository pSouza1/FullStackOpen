import React from "react";

const Persons = (props) => {

    return (
    <ul>
      {props.filteredPersons.map((person) => (
        <li key={person.name}>
          {" "}
          {person.name} {person.number} {' '}

          <button
            onClick={() => {
              props.handleDelete(person.id);
            }}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
