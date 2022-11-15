import React from 'react';

function createTextForMarried(sex, partnerName) {
  if (sex === 'm') {
    return `${partnerName} is my wife`;
  }

  return `${partnerName} is my husband`;
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

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? createTextForMarried(sex, partnerName)
          : 'I am not married'}
      </p>
    </section>
  );
};
