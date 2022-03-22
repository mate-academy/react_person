import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export function Person({
  name,
  sex,
  age,
  isMarried,
  partnerName,
}) {
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
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf('m', 'f').isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
