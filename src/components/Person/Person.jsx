import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const ageInfo = age
    ? `I am ${age}`
    : ``;
  let marriageInfo = `I am not married`;

  if (isMarried) {
    const partner = sex === 'f'
      ? 'husband'
      : 'wife';

    marriageInfo = `${partnerName} is my ${partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{ageInfo}</p>}
      <p className="Person__partner">{marriageInfo}</p>
    </section>
  );
};
