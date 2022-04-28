import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ property }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = property;

  const partnerStatus = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age && `I am ${age}`}
      </p>

      <p className="Person__partner">
        {isMarried
          ? `My ${partnerStatus}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']),
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};
