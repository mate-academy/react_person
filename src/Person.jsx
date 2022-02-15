import React from 'react';

import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let parthnerPhrase = `wife's`;
  let marriedPhrase = 'I am not married';

  if (sex === 'f') {
    parthnerPhrase = `husband's`;
  }

  if (isMarried) {
    marriedPhrase = `My ${parthnerPhrase} name is ${partnerName}`;
  }

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        ? <p>{`I am ${age}`}</p>
        : null}
      <p className="Person__partner">
        {`${marriedPhrase}`}
      </p>
    </div>
  );
};
