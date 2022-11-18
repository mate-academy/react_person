import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {(`My name is ${person.name}`)}
    </h2>

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {(() => {
        switch (person.isMarried) {
          case false:
            return `I am not married`;
          case true:
            switch (person.sex) {
              case 'm':
                return `${person.partnerName} is my wife`;

              case 'f':
                return `${person.partnerName} is my husband`;

              default:
                break;
            }

            break;

          default:
            break;
        }

        return this;
      })()}
    </p>
  </section>
);
