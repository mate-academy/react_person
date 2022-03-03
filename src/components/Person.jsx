import React from 'react';
import './Person.scss';

import PropTypes from 'prop-types';

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
    {age ? (
      <p className="Person__age">
        { `I am ${age}`}
      </p>
    ) : null}

    {isMarried ? (
      <p className="Person__partner">
        {sex === 'm'
          ? `My wife's name is ${partnerName}`
          : `My husband's name is ${partnerName}`
        }
      </p>
    ) : ('I am not married')}
  </section>
);

Person.defaultProps = {
  age: undefined,
  partnerName: 'No partner name',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
