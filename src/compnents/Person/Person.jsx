import React from 'react';
import './Person.scss';

const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      <p className="Person__age">
        {person.age ? `I am ${person.age}` : null}
      </p>
      <p className="Person__partner">
        {
        person.isMarried
          ? `My ${partner}'s name is ${person.partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

export default Person;
