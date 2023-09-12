// export const Person = ({ person }) => ();
import React from 'react';
import './Person.scss';

function family(isMarried, sex, name) {
  if (!isMarried) {
    return 'I am not married';
  }

  if (sex === 'f') {
    return `${name} is my husband`;
  }

  return `${name} is my wife`;
}

export const Person = ({ person }) => {
  const { name, age = null, isMarried, partnerName, sex } = person;

  return (

    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (<p className="Person__age">{`I am ${person.age}`}</p>)
      }
      <p className="Person__partner">
        {family(isMarried, sex, partnerName)}
      </p>
    </section>
  );
};
