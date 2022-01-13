import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const checkSex = sex => (sex === 'm' ? 'wife' : 'husband');

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
        ? `My ${checkSex(sex)}'s name is ${partnerName}`
        : `I am not married`}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: '',
};
