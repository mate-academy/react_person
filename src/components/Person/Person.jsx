import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ personData }) => {
  const { name, age, sex, isMarried, partnerName } = personData;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {
          `My name is ${name}`
        }
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )
      }

      <p className="Person__partner">
        {(isMarried && (
          sex === 'f'
            ? `${partnerName} is my husband`
            : `${partnerName} is my wife`
        ))
          || 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  personData: {
    name: '',
    age: null,
    sex: '',
    isMarried: false,
    partnerName: '',
  },
};

Person.propTypes = {
  personData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
