import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {person.name}
    </h2>
    {person.age && (
      <p className="Person__age">
        I am
        {person.age}
      </p>
    )}
    <p className="Person__partner">
      {getPartnerName(person)}
    </p>
  </section>
);

function getPartnerName(person) {
  return (person.partnerName
    ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married'
  );
}
