import React from 'react';
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
    {age && <p className="Person__age">{`I'm ${age}`}</p>}
    <p className="Person__partner">
      { isMarried
        ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
        : 'I\'m not married'
      }
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

Person.defaultProps = {
  age: null,
};
