import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const partner = sex => (sex === 'm' ? ` wife` : ` husband`);

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}
    <p className="Person__partner">
      {isMarried
        ? `My ${partner(sex)}'s name is ${partnerName}`
        : partnerName
      }
    </p>
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: 'I\'m not married',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
