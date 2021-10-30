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
    <h2 className="Person__name">
      My is
      {name}
    </h2>
    <p className="Person__age">
      {age ? (
        `I am ${age}`
      ) : (
        ''
      )}
    </p>
    <p className="Person__partner">
      {(!isMarried && 'I am not married')
        || (isMarried && sex === 'm'
        && `My wife's name is ${partnerName}`)
        || (isMarried && sex === 'f'
        && `My husband's name is ${partnerName}`)}
    </p>
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
