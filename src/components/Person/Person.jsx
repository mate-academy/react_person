import React from 'react';
import PropTypes from 'prop-types';

function Person({ name, age, sex, isMarried, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {
          (isMarried && (
            `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
          )) || `I am not married`
        }
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: 'Guest',
  age: undefined,
  sex: undefined,
  isMarried: false,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
