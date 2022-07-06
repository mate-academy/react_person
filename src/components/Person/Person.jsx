import React from 'react';

import './Person.scss';

export function Person({ person }) {
  const partnerSex = () => (person.sex === 'm' ? 'wife' : 'husband');

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p>
        {
          person.isMarried
            ? `My ${partnerSex()} ${person.partnerName}`
            : 'I am not married'
        }
      </p>
    </section>
  );
}
