import React from 'react';
import { MyPartner } from '../MyPartner/MyPartner';
import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    {(person.isMarried && <MyPartner person={person} />)
      || <p className="Person__partner">I am not married</p>}
  </section>
);
