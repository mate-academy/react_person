import React from 'react';
import './Person.scss';

const personSex = sex => (sex === 'm' ? 'wife' : `husband`);

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : `My age is Secret`}</p>
      <p className="Person__partner">
        {!isMarried
          ? `I'm not married`
          : `My ${personSex(sex)} name is ${partnerName}`
        }
      </p>
    </section>
  </>
);
