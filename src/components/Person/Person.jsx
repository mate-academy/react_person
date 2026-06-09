// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  let partnerStatus = '';

  if (!isMarried) {
    partnerStatus = 'I am not married';
  } else if (sex === 'm') {
    partnerStatus = `${partnerName} is my wife`;
  } else {
    partnerStatus = `${partnerName} is my husband`;
  }

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerStatus}</p>
    </div>
  );
};
