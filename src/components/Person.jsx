import React from 'react';
import PropTypes from 'prop-types';

function Person({ person }) {
  const wifeOrHusband = (person.sex === 'm' ? `wife's` : `husband's`);

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>

      {person.age && (
      <p className="Person__age">
        I am
        {' '}
        {person.age}
      </p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? `My ${wifeOrHusband} name is ${person.partnerName}`
          : null
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};

Person.defaultrProps = {
  person: {
    age: undefined,
    partnerName: undefined,
  },
};

export { Person };
