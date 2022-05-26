import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && <p className="Person__age">{`I am ${age}`}</p>}
    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'f' ? 'husbands' : 'wife'} name is ${partnerName}`
        : 'Im not married'}
    </p>
  </section>
);

Person.propTypes = {
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
  sex: PropTypes.string,
  name: PropTypes.string,
};

Person.defaultProps = {
  isMarried: true,
  partnerName: 'Unknown partner',
  sex: 'sex',
  name: 'Person name',
};
