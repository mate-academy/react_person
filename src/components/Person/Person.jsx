import React from 'react';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <h1 className="Person__name">Name: {name}</h1>
      {age !== undefined && <p className="Person__age">Age: {age}</p>}
      {sex && <p>Sex: {sex}</p>}
      {isMarried !== undefined && <p>Married: {isMarried ? 'Yes' : 'No'}</p>}
      {isMarried && partnerName && (
        <p className="Person__partner">Partner: {partnerName}</p>
      )}
    </div>
  );
};

export default Person;
