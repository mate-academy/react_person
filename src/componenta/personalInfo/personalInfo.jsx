import React from 'react';
import './person.scss';
import { MarriedOrNot } from './MarriedFun';

export function PersonalInfo(props) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = props.person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        ? (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        ) : null}
      <p className="Person__partner">
        {MarriedOrNot(
          sex,
          isMarried,
          partnerName,
        )}
      </p>
    </section>
  );
}
