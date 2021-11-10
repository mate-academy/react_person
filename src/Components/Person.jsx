import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const partner = (person.sex === 'm')
    ? 'wife'
    : 'husband';

  return (
    <section className="person">
      <h2 className="person__name">{ `My name is ${person.name}` }</h2>
      {person.age && (
        <p className="person__age">{ `I am ${person.age}` }</p>
      )}
      <p className="person__partner">
        {(person.isMarried === false)
          ? 'I am not married'
          : `My ${partner}\`s name is ${person.partnerName}`}
      </p>
    </section>
  );
};
