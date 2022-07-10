import React from 'react';
import './Person.scss';

export function Person({ person }) {
  let message = 'I am not married';

  if (person.isMarried === true) {
    if (person.sex === 'f') {
      message = `My hasbands name is ${person.partnerName}`;
    } else {
      message = `My wife name is ${person.partnerName}`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <>
          <p>{`I am ${person.age}`}</p>
        </>
      )}

      <p className="Person__partner">
        {message}
      </p>

    </section>
  );
}
