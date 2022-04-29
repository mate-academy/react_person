import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ reference }) => {
  const {
    name: personName,
    age,
    sex,
    isMarried,
    partnerName,
  } = reference;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${personName}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {isMarried
          ? (
            `My ${partner}'s name is ${partnerName}`
          ) : ('I am not married')}
      </p>
    </section>
  );
};

Person.propTypes = {
  reference: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['m', 'f']).isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }).isRequired,
};

export { Person };
