import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const hasAge = Object.prototype.hasOwnProperty.call(person, 'age');
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';
  const partnerMessage = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {hasAge && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
