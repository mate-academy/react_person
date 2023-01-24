import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <div className="App">
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
            ? `${partnerName} is my ${partnerSex}`
            : `I am not married`}
        </p>
      </section>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  },
};
