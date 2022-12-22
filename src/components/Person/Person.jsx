import React from "react";

export const Person = ({ person }) => {
  const man = person.sex === 'm';
  const married = person.isMarried === true;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
        {person.age && (
        <p className="Person__age">
          I am {person.age}
        </p>
        )}
        <p className="Person__partner">
          {(married 
          && (man 
            ? `${person.partnerName} is my wife` 
            : `${person.partnerName} is my husband`))
          || ('I am not married')}
        </p>
      </section>
    </div>
  )
};
