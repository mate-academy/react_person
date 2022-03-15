import React from 'react';
import './Person.scss';

export const Person = (person = []) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is&nbsp;
      {person.name}
    </h2>
    {person.age && (
      <p className="Person__age">
        I am&nbsp;
        {person.age}
      </p>
    )}
    {person.isMarried ? (
      <p className="Person__partner">
        My &nbsp;
        {person.sex === 'f' ? 'husband' : 'wife'}
        &apos;s name is&nbsp;
        {person.partnerName}
      </p>
    ) : (
      'I am not maried'
    )
    }
  </section>
);

Person.defaultProps = {
  name: '',
  sex: '',
  isMarried: false,
  partnerName: '',
};
