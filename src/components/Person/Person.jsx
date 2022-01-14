import React from 'react';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <div className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age ? <p className="Person__age">{`I am ${age}`}</p> : null}
    {isMarried ? (
      <p className="Person__partner">
        {`My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`}
      </p>
    ) : (
      <p className="Person__partner">I am not merried</p>
    )}
  </div>
);
