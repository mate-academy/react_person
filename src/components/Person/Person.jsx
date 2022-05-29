import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partner,
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

    {!isMarried ? 'I am not married' : null}

    {(isMarried && sex === 'f') && (
      <p className="Person__partner">
        {`My husband's name is ${partner}`}
      </p>
    )}

    {(isMarried && sex === 'm') && (
      <p className="Person__partner">
        {`My wife's name is ${partner}`}
      </p>
    )}
  </section>
);

Person.defaultProps = {
  age: null,
  isMarried: null,
  partner: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partner: PropTypes.string,
};
