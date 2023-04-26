import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const nameInfo = `My name is ${name}`;
  const ageInfo = age
    ? `I am ${age}`
    : ``;
  let marriageInfo = '';

  if (isMarried) {
    const partner = sex === 'f'
      ? 'husband'
      : 'wife';

    marriageInfo = `${partnerName} is my ${partner}`;
  } else {
    marriageInfo = `I am not married`;
  }

  const ageTag = age
    ? <p className="Person__age">{ageInfo}</p>
    : undefined;

  return (
    <section className="Person">
      <h2 className="Person__name">{nameInfo}</h2>
      {ageTag}
      <p className="Person__partner">{marriageInfo}</p>
    </section>
  );
};
