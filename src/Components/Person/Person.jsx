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
  const personPartner = (isMarried
    ? (
      <p className="Person__partner">
        {`My ${spouse}'s name is ${partnerName}`}
      </p>
    ) : (<p className="Person__partner">I am not married</p>));

  return (
    <section className="Person">
      {name && (
        <h2 className="Person__name">{`My name is ${name}`}</h2>
      )}

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      {personPartner}
    </section>
  );
};
