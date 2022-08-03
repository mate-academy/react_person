import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {person.age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : `I am not married`
        }
      </p>

    </section>
  );
};
