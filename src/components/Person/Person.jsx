import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const ifHavePartnerBlock = (
    <p className="Person__partner">
      {partnerName}
      {' is my '}
      {sex === 'm'
        ? 'wife'
        : 'husband'}
    </p>
  );

  const ifNotHavePartnerBlock = (
    <p className="Person__partner">
      I am not married
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {name}
      </h2>

      {age && (
        <p className="Person__age">
          {'I am '}
          {age}
        </p>
      )}

      {isMarried
        ? ifHavePartnerBlock
        : ifNotHavePartnerBlock}
    </section>
  );
};
