import React from 'react';
import PropTypes from 'prop-types';

export function Person({ name, sex, age, isMarried, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        { `I am ${age}` }
      </p>
      )
      }

      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wifes' : 'husband'} name is ${partnerName}`
          : 'I am not married'}
      </p>

    </section>
  );
}

Person.defaultProps = {
  name: '',
  sex: '',
  age: '',
  isMarried: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
