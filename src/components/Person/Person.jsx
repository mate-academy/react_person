import React from 'react';
import PropTypes from 'prop-types';

export const Person = (
  { person },
) => {
  const partnerSex = (person.sex === 'f') ? 'husband' : 'wife';
  const isMarriedMessage = person.isMarried
    ? (
      `${person.partnerName} is my ${partnerSex}`
    )
    : (
      'I am not married'
    );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
      )}

      <p className="Person__partner">
        {isMarriedMessage}
      </p>
    </section>
  );
};

Person.protoTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
