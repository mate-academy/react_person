import React from 'react';

export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Persone__name">
        My name is
        {' '}
        {person.name}
      </h2>
      <p className="Person__age">
        {person.age && (
          <>
            I am
            {' '}
            {person.age}
          </>
        )}
      </p>
      <p className="Person__Partner">
        {person.partnerName}
        {' '}
        is my
        {' '}
        {person.sex === 'm' ? 'wife' : 'husband'}
      </p>
    </section>
  </div>
);
