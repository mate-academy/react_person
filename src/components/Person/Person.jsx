import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerTitle = sex === 'm' ? 'wife' : 'husband';
  const maritalStatus = isMarried
    ? `${partnerName} is my ${partnerTitle}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};
