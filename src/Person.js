import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    { age ? (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    ) : null}
    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm' ? 'wifes' : 'husband'} name is ${partnerName}`
        : 'I am not married'
      }
    </p>
  </section>
);

Person.defaultProps = {
  name: '',
  sex: '',
  age: '',
  isMarried: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
