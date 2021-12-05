import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const lovePartner = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && (`I am ${age}`)}
      </p>
      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `My ${lovePartner}'s name is ${partnerName}`
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  sex: 'Do not wanna tell',
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};
