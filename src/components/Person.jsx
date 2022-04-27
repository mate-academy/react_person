import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ reference }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = reference;

  const partner = sex === 'f' ? 'husband"s' : 'wife"s';
  const maritalStatus = isMarried
    ? `My ${partner} name is ${partnerName}`
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
        {maritalStatus}
      </p>
    </section>
  );
};

Person.propTypes = {
  reference: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string.isRequired,
  }).isRequired,
};
