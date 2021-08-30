import React from 'react';
import PropTypes from 'prop-types';

export const Person = (props) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = props;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="Person__age">
        {
          age
            ? `I am ${age}`
            : ''
        }

      </p>
      <p className="Person__partner">
        {
          isMarried
            ? `My
              ${
                sex === 'f'
                  ? 'husband'
                  : 'wife'
              }'s name is
            ${partnerName}`
            : 'Not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
};
