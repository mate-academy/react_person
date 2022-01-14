import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const partner = sex => (sex === 'f' ? `husband's` : `wife's`);

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="person">
    <h2 className="person__name">
      {name ? `My name is ${name}` : 'Enter your name'}
    </h2>

    {age && (
      <p className="person__age">{`I am ${age}`}</p>
    )}

    <p className="person__partner">
      {isMarried
        ? `My ${partner(sex)} name is ${partnerName}`
        : 'I am not married'
      }
    </p>
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
