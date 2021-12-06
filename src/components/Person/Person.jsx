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
  const personsSpouse = sex === 'm' ? 'wife' : 'husband';
  const partnerInfo = isMarried
    ? `My ${personsSpouse}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {`I am ${age || 'unknown age'}`}
      </p>
      <p className="Person__partner">
        {partnerInfo || 'unknown partner'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
