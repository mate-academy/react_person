import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        <p className="Person__age">
          {age ? `I am ${age}` : null}
        </p>
        <p className="Person__partner">
          {isMarried
            ? `My ${sex === 'm'
              ? `wife's`
              : `husband's`} name is ${partnerName}`
            : 'I am not married'}
        </p>
      </section>
    </>
  );
}

Person.defaultProps = {
  age: 0,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
