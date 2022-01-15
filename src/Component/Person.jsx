import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({
  name,
  age,
  partnerName,
  sex,
  isMarried,
}) {
  const partner = () => (sex === 'm' ? 'wife' : 'husband');

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age ? (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      ) : (
        null
      )}

      {isMarried ? (
        <p className="Person__partner">
          {`My ${partner(sex)}'s name is ${partnerName}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
}

Person.defaultProps = {
  age: null,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
