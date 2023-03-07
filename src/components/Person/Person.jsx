import React from 'react';

export const Person = ({ person }) => {
  const spouseTitle = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Persone__name">
          {`My name is ${person.name}`}
        </h2>
        <p className="Person__age">
          {person.age && (
          <>
            {`I am ${person.age}`}
          </>
          )}
        </p>
        <p className="Person__partner">
          {person.isMarried === false
            ? 'I am not married'
            : `${person.partnerName} is my ${spouseTitle}`
          }
        </p>
      </section>
    </div>
  );
};
