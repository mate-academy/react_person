import React from 'react';
import PropTypes from 'prop-types';

function Person({ name, sex, age, isMarried, partnerName }) {
  return (
    <>
      <h2>
        {'My name is'}
        {name}
      </h2>

      {age ? (
        <p>
          {`I am ${age}`}
        </p>
      )
        : null
      }

      {isMarried
        ? `My ${sex === 'f' ? "husband's" : "wife's"} name is ${partnerName}`
        : 'I am not married'
      }
    </>
  );
}

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
