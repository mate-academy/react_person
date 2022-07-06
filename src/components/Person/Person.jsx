import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  sex,
  isMarried,
  age,
  partnerName,
}) => {
  const partner = sex === 'f' ? 'husband`s' : 'wife`s';

  return (
    <div className="Person">
      <h2 className="Person__name">
        My name is
        {` ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">

        {isMarried
          ? `My ${partner} name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Person;
