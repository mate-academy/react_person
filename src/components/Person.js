import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
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
    <p className="Person__age">
      {age ? `I am ${age}` : null}
    </p>
    {isMarried ? (
      <p className="Person__partner">
        {sex === 'f'
          ? `My husband's name is ${partnerName}`
          : `My wife's name is ${partnerName}`
        }
      </p>
    ) : (
      <p className="Person__partner">
        I am not married
      </p>
    )}
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: 'unknown',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
