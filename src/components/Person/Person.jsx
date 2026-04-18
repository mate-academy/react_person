import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerLabel = '';

  if (sex === 'm') {
    partnerLabel = 'wife';
  } else {
    partnerLabel = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {typeof age !== 'undefined' && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `${partnerName} is my ${partnerLabel}`}
      </p>
    </section>
  );
};
