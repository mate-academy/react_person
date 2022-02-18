import React from 'react';

import './Person.scss';

export const Person = ({ info }) => {
  const { name, age = 0, sex, isMarried = false, partnerName = null } = info;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        {name}
      </h2>
      {age > 0 && (
        <p className="Person__age">
          I am&nbsp;
          {age}
        </p>
      )}
      {isMarried
        ? (
          <p className="Person__partner">
            My&nbsp;
            {sex === 'f' ? 'husband' : 'wife'}
            &nbsp;is&nbsp;
            {partnerName}
          </p>
        )
        : (
          <p className="Person_partner">
            I am not married
          </p>
        )
      }
    </section>
  );
};
