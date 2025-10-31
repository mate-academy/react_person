import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText = 'I am not married';

  if (isMarried) {
    partnerText =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  }

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
