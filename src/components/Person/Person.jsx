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

  const personPartnerElement = (
    <>
      {sex === 'm' ? (
        `My wife's name is ${partnerName}`
      ) : (
        `My husband's name is ${partnerName}`
      )}
    </>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried ? (personPartnerElement) : ('I am not married')}
      </p>
    </section>
  );
}

export default Person;
