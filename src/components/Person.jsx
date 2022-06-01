import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  sex,
  age,
  isMarried,
  partnerName,
}) => {
  const partner = sex === 'm' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
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
  age: null,
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
