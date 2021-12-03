import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const personSex = sex === 'm' ? 'wife' : 'husband';
  const hasPartner = isMarried
    ? `My ${personSex}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{`I am ${age}`}</p>
      <p className="Person__partner">{hasPartner}</p>
    </section>
  );
};

Person.defaultProps = {
  age: 'unknown age',
  isMarried: 'Unknown data',
  partnerName: 'unknown partner',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
