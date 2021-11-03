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
  const partnerStatus = sex === 'm' ? 'wife' : 'husband';

  const marriageDescription = isMarried
    ? `My ${partnerStatus}'s name is ${partnerName}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {
        age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }

      <p className="Person__partner">
        {marriageDescription}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};
