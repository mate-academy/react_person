import React from 'react';
// import cn from 'classnames';

export const Person = ({ person: {
  name,
  age = 0,
  sex,
  isMarried,
  partnerName,
} }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    { age !== 0 && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    <p className="Person__partner">
      { (sex === 'm' && (isMarried)) && (
        `${partnerName} is my wife`
      )}

      { (sex === 'f' && (isMarried)) && (
        `${partnerName} is my husband`
      )}

      { (!isMarried) && (
        `I am not married`
      )}
    </p>
  </section>
);
