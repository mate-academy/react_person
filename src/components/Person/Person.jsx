import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, gender } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {age && <p className="Person__age">Age: {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {gender === 'male' ? 'Wife' : 'Husband'}: {partnerName}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']).isRequired,
  }).isRequired,
};

export default Person;
