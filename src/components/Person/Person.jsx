/* eslint-disable */
import React from 'react';
import './Person.scss';

export default function Person({
  sex,
  isMarried,
  partnerName,
  name,
}) {
  const personPartner = sex === 'm' ? 'wife' : 'husband';
  const marriageStatus = isMarried
    ? `My ${personPartner}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
       { `My name is ${name}`}
      </h2>
      {
        age &&
        <p className="Person__age">
        {`I am ${age}`}
        </p>
      }
      <p className="Person__partner">
        {
          marriageStatus
        }
      </p>
    </section>
  );
};

