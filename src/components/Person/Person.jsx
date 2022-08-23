import React from 'react';
import PropTypes from 'prop-types';

export function Person({
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
      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      {isMarried
        ? (
          <p className="Person__partner">
            {`My `(sex === 'm' ? "wife's" : "husband's")` name is ${partnerName}`}
          </p>
        ) : (
          <p className="Person__partner">I am not married</p>
        )
      }
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};
