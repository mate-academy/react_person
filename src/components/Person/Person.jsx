import React from 'react';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  // eslint-disable-next-line no-nested-ternary
  const partnerTitle = isMarried ? (sex === 'M' ? 'wife' : 'husband') : '';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {partnerTitle}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};

export default Person;
