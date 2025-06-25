import React from 'react';

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age != null && <p className="Person__age">I am {person.age}</p>}
      {() => {
        if (!person.isMarried) {
          return <p className="Person__partner">I am not married</p>;
        }

        if (person.sex === 'm') {
          return (
            <p className="Person__partner">{person.partnerName} is my wife</p>
          );
        }

        return (<p className="Person__partner">{person.partnerName} is my husband</p>);
      }}
    </section>
  );
};
