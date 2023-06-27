import './Person.scss';
import React from 'react';

export const Person = ({ person }) => {
  let partnerString = '';

  if (person.sex === 'm' && person.isMarried === true) {
    partnerString = `${person.partnerName} is my wife`;
  }

  if (person.sex === 'f' && person.isMarried === true) {
    partnerString = `${person.partnerName} is my husband`;
  }

  if (person.isMarried === false) {
    partnerString = `I am not married`;
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
        <p className="Person__partner">{partnerString}</p>
      </section>
    </div>
  );
};
