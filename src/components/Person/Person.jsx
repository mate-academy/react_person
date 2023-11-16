import React from 'react';

const getPartnerText = (person) => {
  if (!person.isMarried) {
    return 'I am not married';
  }

  if (person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  }

  return `${person.partnerName} is my husband`;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age ? (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    ) : ''}

    <p className="Person__partner">
      {getPartnerText(person)}
    </p>
  </section>
);
