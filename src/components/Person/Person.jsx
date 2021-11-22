import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = (props) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = props;

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
        {isMarried && partnerName ? (
          `My ${sex === 'm' ? "wife's" : "husband's"} name is ${partnerName}`
        ) : (
          'I am not married'
        )}
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
