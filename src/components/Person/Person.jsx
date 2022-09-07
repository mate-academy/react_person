import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => {
  const partner = sex === 'f'
    ? 'husband'
    : 'wife';

  const soloOrNot = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && (
        <p className="Person__age">{`I am ${age}`}</p>
        )}
        <p className="Person__partner">{soloOrNot}</p>
      </section>
    </>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
