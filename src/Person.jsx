import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = (sex === 'f') ? 'husband' : 'wife';

  return (
    <>
      <h2>
        {`My name is ${name}`}
      </h2>

      {age && (
        <p>
          {`I am ${age}`}
        </p>
      )}

      <p>
        {
          isMarried ? `My ${partner} name is ${partnerName}` : 'I am not married'
        }
      </p>
    </>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number || PropTypes.object,
  partnerName: PropTypes.string,
  isMarried: PropTypes.bool,
};

export default Person;
