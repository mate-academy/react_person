// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';
  const nameT = `My name is ${name}`;
  const ageT = `I am ${age}`;
  const partnerT = isMarried
    ? `${partnerName} is my ${partner}`
    : `I am not married`;
  return (
    <section className="Person">
      <h2 className="Person__name">{nameT}</h2>
      {age && <p className="Person__age">{ageT}</p>}
      <p className="Person__partner">{partnerT}</p>
    </section>
  );
};
