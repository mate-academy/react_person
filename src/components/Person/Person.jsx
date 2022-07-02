import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  let partnerSex = 'My husband`s name is ';

  if (sex === 'm') {
    partnerSex = 'My wife`s name is ';
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          My name is
          {' '}
          {name}
        </h2>
        <p className="Person__age">{age ? `I am ${age}` : null}</p>
        <p className="Person__partner">
          {isMarried ? partnerSex + partnerName : 'I am not married'}
        </p>
      </section>
    </>
  );
}
