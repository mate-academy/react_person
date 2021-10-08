import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = sex === 'f'
    ? `My husband's name is ${partnerName}`
    : `My wife's name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age && (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? partner
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: undefined,
  isMarried: false,
  partnerName: undefined,
};

export default Person;
