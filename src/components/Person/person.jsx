import React from 'react';
import PropTypes from 'prop-types';
import './person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    {age ? (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
    ) : (
      <></>
    )}
    {isMarried ? (
      <p className="Person__partner">
        My
        {' '}
        {sex === 'f' ? 'husband' : 'wife'}
        &apos;s name is
        {' '}
        {partnerName}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}

  </section>
);

Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
