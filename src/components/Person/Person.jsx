import React from 'react';

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
        {`
        My ${person.sex === 'm'
          ? `wife's`
          : `husband's`} name is ${person.partnerName}
        `}
      </p>
    ) : 'I am not married'}
  </>
);

export default Person;
