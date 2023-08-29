import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerInfo = (sex === 'm')
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

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
        {(isMarried)
          ? partnerInfo
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
