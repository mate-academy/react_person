// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ name, sex, age, partner, isMarried }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {sex === 'm' && isMarried ? (
        <p className="Person__partner">{partner} is my wife</p>
      ) : (
        <p className="Person__partner">{partner} is my husband</p>
      )}
      {!isMarried && <p>I am not married</p>}
    </section>
  );
};
