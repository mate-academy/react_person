import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerLabel;

  if (isMarried) {
    partnerLabel = sex === 'm' ? 'wife' : 'husband';
  } else {
    partnerLabel = 'not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (<p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">{partnerName ? `${partnerName} is my ${partnerLabel}` : `I am ${partnerLabel}`}</p>
    </section>
  );
};
