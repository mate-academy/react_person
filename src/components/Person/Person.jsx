import React from 'react';
import './Person.scss';

export const Person = ({
  age,
  name,
  partnerName,
  sex,
  isMarried,
}) => {
  let personPartner = '';

  if (isMarried) {
    personPartner = sex === 'f' ? `My husband's name is ${partnerName}`
      : `My wife's name is ${partnerName}`;
  } else {
    personPartner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}
      <p className="Person__partner">
        {personPartner}
      </p>
    </section>
  );
};
