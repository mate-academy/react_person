import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ name, age, partnerName, sex, isMarried }) => {
  const typeOfSex = sex === 'm' ? 'wife' : 'husband';

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
        {isMarried
          ? `My ${typeOfSex}'s name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
};

export default Person;
