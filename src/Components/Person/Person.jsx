import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partnerType = sex === 'm'
    ? 'wife'
    : 'husband';
  const partner = isMarried
    ? `My ${partnerType}'s name is ${partnerName}`
    : 'I am not married';

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
        {partner}
      </p>
    </section>
  );
}

Person.defaultProps = {
  age: 0,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf('m' || 'f').isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
