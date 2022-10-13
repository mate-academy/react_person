import React from 'react';

const getPartnerPhrase = (sex, partnerName) => (
  sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`
);

const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      <p className="Person__partner">
        {(isMarried)
          ? getPartnerPhrase(sex, partnerName)
          : `I am not married`}
      </p>
    </section>
  );
};

export default Person;
