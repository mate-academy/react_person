import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  partnerName,
  isMarried,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    <p className="Person__partner">
      {isMarried
        ? (sex === 'm' && `My wife's name is ${partnerName}`)
        || (sex === 'f' && `My husband's name is ${partnerName}`)
        : 'I am not married'}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};
