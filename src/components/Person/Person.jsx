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
  const expression = sex === 'm'
    ? `My wife's name is ${partnerName}`
    : `My husband's name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {age ? `I am ${age}` : null}
      </p>
      <p className="Person__partner">
        {isMarried ? expression : partnerName}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: 'I am not married',

};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
