import React from 'react';

export const Person = ({ person }) => (
  <>
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    {person.isMarried ? (
      <p>
        {`${person.partnerName} is my
        ${person.sex === 'm' ? 'wife' : 'husband'}`}
      </p>
    ) : <p>I am not married</p>}
  </>
);
