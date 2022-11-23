import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  function secondHalf(gender) {
    return (
      gender === 'f' ? 'husband' : 'wife'
    );
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        {age ? (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        ) : (
          <p className="Person__age" />
        )}
        {isMarried ? (
          <p className="Person__partner">
            {`${partnerName} is my ${secondHalf(sex)}`}
          </p>
        ) : (
          <p className="Person__partner">
            I am not married
          </p>
        )}
      </section>
    </div>
  );
};

Person.defaultProps = {
  age: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
