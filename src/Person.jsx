import React from 'react';
import PropTypes from 'prop-types';

export const Person = (props) => {
  const { person } = props;

  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

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
          ? `My ${partner}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    age: PropTypes.number,
    partnerName: PropTypes.string,
  }),
};
