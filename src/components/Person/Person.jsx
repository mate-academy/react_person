import React from 'react';
import './Person.scss';

export const Person = ({ name, age, partner, isMarried, sex }) => {
  const husbandOrWife = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age
        ? (<p className="Person__age">{`I am ${age}`}</p>)
        : null
      }
      <p className="Person__partner">
        {(isMarried && (`My ${husbandOrWife}'s name is ${partner}`))
          || (`I'm not married yet`)
        }
      </p>
    </section>
  );
};
