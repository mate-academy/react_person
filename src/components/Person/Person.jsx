import React from 'react';
import propTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const whoIsPartner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {
          `My name is ${name}`
        }
      </h2>
      <p className="Person__age">
        {
          age && (
            `I am ${age}`
          )
        }
      </p>
      <p className="Person__partner">
        {
          isMarried
            ? `My ${whoIsPartner}'s name is ${partnerName}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.propTypes = {
  name: propTypes.string.isRequired,
  sex: propTypes.string.isRequired,
  partnerName: propTypes.string.isRequired,
};
