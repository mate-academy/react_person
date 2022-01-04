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
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">
      {age ? (
        `I am ${age}`
      ) : (
        ''
      )}
    </p>

    <p className="Person__partner">
      {partnerName && sex === 'm' ? (
        `My wife's name is ${partnerName}`
      ) : (
        ''
      )}

      {partnerName && sex === 'f' ? (
        `My husband's name is ${partnerName}`
      ) : (
        'I am not married'
      )}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
