import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({ name, sex, age, isMarried, partnerName }) {
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: 'User name',
  sex: undefined,
  age: undefined,
  isMarried: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
