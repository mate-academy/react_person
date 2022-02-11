import React from 'react';

import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const spouse = (sex === 'm' ? 'wife' : 'husband');
  const personPartner = isMarried
    ? `My ${spouse}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      {name && (
        <h2 className="Person__name">{`My name is ${name}`}</h2>
      )}

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {personPartner}
      </p>
    </section>
  );
};
