/* eslint-disable */
import React from 'react';
import '../../App.scss';

export default function Person(props) {
  const personPartner = props.sex === 'm' ? 'wife' : 'husband';
  const marriageStatus = props.isMarried
    ? `My ${personPartner}'s name is ${props.partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
       { `My name is
        ${props.name}`}
      </h2>
      {
        props.age
        &&
        <p className="Person__age">
        {`I am
        ${props.age}`}
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

