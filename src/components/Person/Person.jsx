import React from 'react';
import './Person.scss';

export const Person = ({ name, age, partnerName, isMarried, sex }) => {
  const partnerStatus = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)
      }
      <p className="Person__partner">
        {isMarried
          ? (`My ${partnerStatus}'s name is ${partnerName}`)
          : (`I'm not married yet`)
        }
      </p>
    </section>
  );
};
