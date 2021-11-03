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
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        <p className="Person__age">
          {age
            ? `I am ${age}`
            : ''
          }
        </p>
        <p className="Person__partner">
          { (!isMarried)
            ? 'I am not married'
            : `My ${partner}'s name is ${partnerName}`
          }
        </p>
      </section>
    </>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
