import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age && (`I am ${age}`)}
      </p>

      {isMarried ? (
        <p className="Person__partner">
          {`My ${partner}'s name is ${partnerName}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
};

Person.defaultProps = {
  isMarried: false,
  age: null,
  sex: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  sex: PropTypes.string,
};

export default Person;
