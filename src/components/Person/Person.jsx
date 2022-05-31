import React from 'react';
import './Person.scss';

function Person({ personalInfo }) {
  const {
    name,
    age,
    partnerName,
    isMarried,
    sex,
  } = personalInfo;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      <p className="Person__age">
        {age ? (
          `I am ${age}`
        ) : null}
      </p>
      {isMarried ? (
        <p className="Person__partner">
          {sex === 'm' ? (
            `My wife's name is ${partnerName}`
          ) : (
            `My husband's name is ${partnerName}`
          )}
        </p>
      ) : 'I am not married'}
    </section>
  );
}

export default Person;
