import React from 'react';

export function Person({ person }) {
  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{ `My name is ${person.name}` }</h2>

        {person.age
          && (
          <p className="Person__age">
            {`I am ${person.age}`}
          </p>
          )
        }

        {person.isMarried ? (
          <p className="Person__partner">
            {person.sex === 'f'
              ? `${person.partnerName} is my husband`
              : `${person.partnerName} is my wife`
          }
          </p>
        )
          : (
            <p className="Person__partner">
              I am not married
            </p>
          )
        }
      </section>
    </>
  );
}
