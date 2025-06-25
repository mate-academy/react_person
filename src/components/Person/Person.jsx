import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};
