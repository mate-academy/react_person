import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age ? `I am ${age}` : null}
      </p>

      <p className="Person__partner">
        {isMarried ? `My ${partner}'s name is ${partnerName}` : `I am not married`}
      </p>
    </section>
  );
};
