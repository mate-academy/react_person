import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const myСouple = sex === 'm' ? 'wife' : 'husband';
  const maritalStatus = isMarried
    ? `My ${myСouple}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && (`I am ${age}`)}
      </p>
      <p className="Person__partner">
        {maritalStatus}
      </p>
    </section>
  );
};

Person.defaultProps = {
  isMarried: false,
  age: null,
  sex: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
