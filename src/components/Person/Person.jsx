import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

const defineEngagementState = (sex, isMarried, partnerName) => {
  if (!isMarried) {
    return 'I am not married';
  }

  const partnerSex = () => {
    if (!sex) {
      return 'partner\'s';
    }

    return sex === 'f' ? ('husband\'s') : ('wife\'s');
  };

  return partnerName
    ? `My ${partnerSex()} name is ${partnerName}`
    : 'I am married';
};

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age && age >= 0 && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    <p className="Person__partner">
      {defineEngagementState(sex, isMarried, partnerName)}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['m', 'f', null]),
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string || PropTypes.objectOf(null),
};

Person.defaultProps = {
  age: -1,
  sex: null,
  isMarried: false,
  partnerName: null,
};
