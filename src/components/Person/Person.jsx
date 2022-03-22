import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export function Person({ person }) {
  const { name, sex, age, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: 'undefined',
  sex: null,
  age: null,
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.oneOf(['m', 'f', null]),
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
