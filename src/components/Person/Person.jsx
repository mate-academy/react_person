// eslint-disable max-len
import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

export function Person({ name, age, partnerName, isMarried, sex }) {
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age ? (
          <p className="Person__age">{`I am ${age}`}</p>
        )
          : null
        }

        <p className="Person__partner">
          {isMarried
            ? `My ${partner}'s name is ${partnerName}`
            : 'I am not married'
          }
        </p>
      </section>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  partnerName: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  sex: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  age: PropTypes.number,
};
