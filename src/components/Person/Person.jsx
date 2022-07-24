import React from 'react';
import Partner from './Partner';

const Person = ({ person }) => (
  <>
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}

    {person.isMarried ? (
      <p className="Person__partner">
        <Partner {...person} />
      </p>
    ) : 'I am not married'}
  </>
);

export default Person;
