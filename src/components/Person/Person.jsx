import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

export function Person({ name, age, partnerName, isMarried, sex }) {
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && (`I am ${age}`)}
      </p>
      <p className="Person__partner">
        {isMarried
          ? (`My ${partner}'s name is ${partnerName}`)
          : ('I am not married')}
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  sex: PropTypes.string.isRequired,
};
