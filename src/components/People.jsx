import React from 'react';
import './People.scss';

export const People = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age && <p className="Person__age">{`I am ${age}`}</p>}

    {isMarried ? (
      <p className="Person__partner">
        {`My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`}
      </p>
    ) : (
      <p>
        I am not married
      </p>
    )}
  </section>
);
