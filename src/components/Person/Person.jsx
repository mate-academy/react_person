import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
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
      {isMarried ? (
        `My ${sex === 'f' ? "husband's" : "wife's"} name is ${partnerName}`
      ) : (
        'I am not married'
      )}
    </p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  age: PropTypes.number.isRequired,
  partnerName: PropTypes.string.isRequired,
};
