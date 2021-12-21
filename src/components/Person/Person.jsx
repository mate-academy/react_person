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
  <section className="person">
    <h2 className="person__name">{`My name is ${name}`}</h2>
    <p className="person__age">
      {age && `I am ${age}`}
    </p>
    <p className="person__partner">
      {isMarried
        ? `My ${sex === 'm' ? `wife's` : `husband's`} name is ${partnerName}`
        : `I am not married`}
    </p>
  </section>
);

Person.defaultProps = {
  name: 'John Doe',
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
