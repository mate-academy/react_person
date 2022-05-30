/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

/* eslint-disable @typescript-eslint/no-unused-vars */
const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partnerType = sex === 'm'
    ? 'wife'
    : 'husband';

  const partner = isMarried
    ? `My ${partnerType} name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      <p className="Person__partner">
        {partner}
      </p>

      {age && (
        <p className="Person__age">
          I am {age}
        </p>
      )}
    </section>
  );
};

Person.defaultProps = {
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf('m' || 'f').isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
