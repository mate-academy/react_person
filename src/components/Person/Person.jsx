import React from 'react';

const Partner = ({ sex, name }) => (sex === 'm' ? `${name} is my wife` : `${name} is my husband`);

const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
      )}
      <p className="Person__partner">
        {(isMarried) ? (<Partner sex={sex} name={partnerName} />) : `I am not married`}
      </p>
    </section>
  );
};

export default Person;
