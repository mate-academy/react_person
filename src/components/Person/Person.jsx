import React from 'react';
import './person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        My name is
        <span> </span>
        {name}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          <span> </span>
          {age}
        </p>
      )}
      {isMarried && (
        <p className="Person__partner">
          {partnerName}
          is my
          <span> </span>
          {sex === 'm' ? 'wife' : 'husband'}
        </p>
      )}
    </section>
  </>
);
