import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = (sex === 'm') ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person_name">
        { `My name is ${name}` }
      </h2>
      <p className="Person__age">
        { age
          ? `I am ${age}`
          : age }
      </p>
      <p className="Person__partner">
        { isMarried
          ? `My ${partner} is ${partnerName}`
          : 'I am not married' }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: undefined,
};
