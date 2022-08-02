import React from 'react';

export const Person = ({ person }) => {
  const { sex, name, age, isMarried, partnerName } = person;
  const wifeOrHusband = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (<p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">
        {isMarried
          ? `My ${wifeOrHusband}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};
