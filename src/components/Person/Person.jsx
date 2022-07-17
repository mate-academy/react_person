import React from 'react';

export function Person({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{person.name}</h2>
      {person.age ? (
        <p className="Person__age">
          I am
          {' '}
          {person.age}
        </p>
      ) : <p>{undefined}</p>
      }

      {person.isMarried ? (
        <p className="Person__partner">
          My
          {
            person.isMarried && person.sex === 'm'
              ? (' wife')
              : (' husband')
          }
          &apos;s name is
          {' '}
          {person.partnerName}
        </p>
      ) : <p>I am not married</p>
      }
    </section>
  );
}
