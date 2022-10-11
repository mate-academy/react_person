import React from 'react';

export const Person = ({
  name,
  isMarried,
  age,
  sex,
  partnerName,
}) => {
  function partnerSex() {
    if (sex === 'm') {
      return 'wife';
    }

    return 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="Person__age">{age && `I am ${age}`}</p>
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerSex()}`
          : 'I am not married'}
      </p>
    </section>
  );
};

export default Person;
