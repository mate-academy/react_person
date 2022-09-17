import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const partner = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        { person.name }
      </h2>
      {
        person.age
        && (
          <p className="Person__age">
            I am&nbsp;
            {person.age}
          </p>
        )
      }

      <p className="Person__partner">
        {
          person.isMarried
            ? `${person.partnerName} is my ${partner}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};
