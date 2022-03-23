import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner = 'I am not married';

  if (isMarried) {
    partner = sex === 'm' ? `My wife's name is ${partnerName}`
      : `My husband's name is ${partnerName}`;
  }

  return (
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
        {partner}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: undefined,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
};
