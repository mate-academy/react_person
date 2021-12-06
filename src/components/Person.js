import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

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
      {(sex && isMarried)
        ? (
          <p className="Person__partner">
            {`My ${partner}'s name is ${partnerName}`}
          </p>
        )
        : (
          <p className="Person__partner">
            I am single
          </p>
        )}
    </section>
  );
};

Person.defaultProps = {
  age: null,
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
