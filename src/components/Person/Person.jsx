// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => {
  let message;

  if (person.isMarried && person.sex === 'f') {
    message = <p>{person.partnerName} is my husband</p>;
  } else if (person.isMarried && person.sex === 'm') {
    message = <p>{person.partnerName} is my wife</p>;
  } else {
    message = <p>I am not married</p>;
  }

  return (
    <div>
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        <p className="Person__age">I am {person.age}</p>
        <p className="Person_partner">{message}</p>
      </section>
    </div>
  );
};
