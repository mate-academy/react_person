import React from 'react';
import './Person.scss';

import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, partnerName }) => {
  const wifeOrHusband = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="person">
      <h2 className="person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="person__partner">
        {partnerName
          ? `My ${wifeOrHusband}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
};
