import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerMessage;

  if (!isMarried) {
    partnerMessage = 'I am not married';
  } else {
    const partnerRole = sex === 'm' ? 'wife' : 'husband';
    partnerMessage = `${partnerName} is my ${partnerRole}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && (
        <p className="Person__age">I am {age}</p>
      )}

      <p className="Person__partner">
        {partnerMessage}
      </p>
    </section>
  );
};
