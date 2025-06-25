import React from 'react';

function isPersonWithPartner(isMarried, sex, partnerName) {
  if (isMarried) {
    return sex === 'f'
      ? `${partnerName} is my husband`
      : `${partnerName} is my wife`;
  }

  return `I am not married`;
}

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age > 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isPersonWithPartner(isMarried, sex, partnerName)}
      </p>

    </section>
  );
};
