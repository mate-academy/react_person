import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    { age && (
    <p className="Person__age">{`I am ${age}`}</p>
    ) }
    { isMarried ? (
      <p className="Person__partner">
        { sex === 'f' ? (
          `My husband's name is ${partnerName}`
        ) : (
          `My wife's name is ${partnerName}`
        )
      }
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )
  }
  </section>
);

Person.defaultProps = {
  name: '',
  age: null,
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
