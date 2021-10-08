import React from 'react';
import PropTypes from 'prop-types';

function Person({
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

      <p className="Person__age">{age && `I am ${age}`}</p>

      {isMarried ? (
        <p className="Person__partner">
          {sex === 'm'
            ? `My wife's name is ${partnerName}`
            : `My husband's name is ${partnerName}`
          }
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}

Person.defaultProps = {
  age: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
