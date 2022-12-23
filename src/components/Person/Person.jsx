import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ personData }) => {
  console.log(personData)

  // const { name, age, sex, isMarried, partnerName } = personData;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {
          `My name is ${personData.name}`
        }
      </h2>

      {personData.age && (
        <p className="Person__age">
          {`I am ${personData.age}`}
        </p>
      )
      }

      <p className="Person__partner">
        {(personData.isMarried && (
          personData.sex === 'f'
            ? `${personData.partnerName} is my husband`
            : `${personData.partnerName} is my wife`
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
