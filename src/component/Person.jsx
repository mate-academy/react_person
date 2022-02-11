import React from 'react';
import './Person.scss';

const Person = ({ name, isMarried, sex, partnerName, age }) => (
  <section className="Person__name">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    { age ? (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    ) : (
      <span />
    )
    }

    { isMarried === true ? (
      <p className="Person__partner">
        My
        {` ${sex === 'm' ? 'wife' : 'husband'}'s `}
        name is
        {` ${partnerName}`}
      </p>
    )
      : (
        <p className="Person__partner">I am not married</p>
      )
      }

  </section>
);

export default Person;
