import React from 'react';
import PropTypes from 'prop-types';

function InfoAboutPerson({ person }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {person.name ? `My name is ${person.name}` : null}
      </h2>

      <p className="Person__age">
        I am
        {person.age || '0'}
      </p>
      <p className="Person__partner">
        {person.isMarried
          ? `My wife's name is ${person.partnerName}`
          : null
        }
      </p>
    </section>
  );
}

InfoAboutPerson.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};

export { InfoAboutPerson };
