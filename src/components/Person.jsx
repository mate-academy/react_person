import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  partnerName,
  sex,
  isMarried,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">
      {age && `I am ${age}`}
    </p>
    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'f'
          ? `husband's`
          : `wife's`} name is ${partnerName}`
        : `I am not married`}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};
