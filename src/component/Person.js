import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  partnerName,
  married,
}) => (
  <>
    <section className="Person">
      {name && (
        <h2 className="Person__name">
          My name is
          {' '}
          {name}
        </h2>
      )}

      {age > 0 && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}

      {partnerName && (
        <p className="Person__partner">
          My
          {' '}
          {sex === 'f' ? 'husband' : 'wife'}
          &apos;s name is
          {' '}
          {partnerName}
        </p>
      )}

      {!married && (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  </>
);

Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  partnerName: '',
  married: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  partnerName: PropTypes.string,
  married: PropTypes.bool,
};
