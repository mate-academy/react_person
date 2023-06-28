import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const ageElement = age
  && <p className="Person__age">{`I am ${age}`}</p>;

  const partnerStatus = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriedMessage = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {ageElement}

      <p className="Person__partner">
        {marriedMessage}
      </p>
    </section>
  );
};
