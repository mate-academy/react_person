import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  let partnerString = `wife's`;
  let marriedString = 'I am not married';

  if (person.sex === 'f') {
    partnerString = `husband's`;
  }

  if (person.isMarried) {
    marriedString
      = `My ${partnerString} name is ${person.partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{marriedString}</p>
    </section>
  );
};
