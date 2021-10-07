import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, isMarried, partnerName, sex }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'f'
            ? 'husband' : 'wife'}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  </>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  partnerName: '',
  age: 0,
};
