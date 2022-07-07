import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  // eslint-disable-next-line
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>

    {age 
      && <p className="Person__age">
      {`I am ${age}`}
     </p>
     }

    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm' ? 'wife' : 'husband'} is ${partnerName}`
        : 'I am not married'}
    </p>
  </section>
);

Person.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.string,
  partnerName: PropTypes.string,
};
