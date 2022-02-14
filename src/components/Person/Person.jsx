import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, partherName, sex, isMarried }) => {
  const married = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}
      </p>
      <p className="Person__partner">
        { isMarried
          ? `My ${married}'s name is ${partherName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  partherName: PropTypes.string,
  isMarried: PropTypes.bool.isRequired,
};

Person.defaultProps = {
  partherName: '',
  age: undefined,
};
