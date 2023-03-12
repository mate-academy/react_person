import React from 'react';
// export const Person = ({ person }) => ();

export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age ? `I am ${person.age}` : ''}</p>
      <p className="Person__partner">{person.partnerName ? `${person.partnerName} is my wife` : 'I am not married'}</p>
    </section>
  </div>
);
