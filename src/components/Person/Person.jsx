import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        { age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        )}

        <p className="Person__partner">
          {isMarried
            ? `${partnerName} is my ${partner}`
            : <p className="Person__partner">I am not married</p>}
        </p>
      </section>
    </div>
  );
};
