import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerString = sex === 'm'
    ? (<p className="Person__partner">{`${partnerName} is my wife`}</p>)
    : ((<p className="Person__partner">{`${partnerName} is my husband`}</p>)
    );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        ? (<p className="Person__age">{`I am ${age}`}</p>)
        : undefined
      }
      {isMarried
        ? partnerString
        : (<p className="Person__partner">I am not married</p>)
      }
    </section>
  );
};

Person.defaultProps = {
  age: undefined,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.number.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
