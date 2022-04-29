import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
}

Person.propTypes = {
  reference: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']),
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};

export default Person;
