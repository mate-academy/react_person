import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age > 0 ? (
          `I am ${age}`
        ) : (
          `Person won't give its age`
        )}
      </p>
      <p className="Person__partner">
        {
          isMarried ? (
            `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
          ) : (
            `I am not married`
          )
        }
      </p>
    </section>
  );
}

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
