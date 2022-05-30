import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">

      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {
        age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )
      }

      <p className="Person__partner">
        {
          isMarried
            ? `My ${partner}'s name is ${partnerName}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: '',
  age: 0,
  sex: 'm',
  isMarried: false,
  partnerName: 'not married',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
