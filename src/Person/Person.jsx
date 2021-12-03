import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const sweetHeart = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age
          ? (
            `I am ${age}`)
          : (
            `It is a secret`
          )}
      </p>
      <p className="Person__married">
        {isMarried
          ? (
            `My ${sweetHeart} name is ${partnerName}`
          )
          : (
            `I am not married`
          )}
      </p>
    </section>
  );
};

Person.defaultProps = {
  isMarried: false,
  sex: 'Try to guess',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};
