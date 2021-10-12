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
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried ? (
          `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
        ) : (
          'I am not married'
        )}
      </p>
    </section>
  );
}

Person.defaultProps = {
  partnerName: '',
  age: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
  age: PropTypes.number,
};
