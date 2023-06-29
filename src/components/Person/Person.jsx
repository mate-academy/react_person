import './Person.scss';
import React from 'react';

export const Person = ({ person }) => {
  const partnerStatus = person.sex === 'm'
    ? 'wife'
    : 'husband';

  const partnerString = person.isMarried
    ? `${person.partnerName} is my ${partnerStatus}`
    : 'I am not married';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
        {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
        )}
        <p className="Person__partner">
          {partnerString}
        </p>
      </section>
    </div>
  );
};
