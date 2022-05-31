import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person }) => {
  const {
    name, age, sex, isMarried, partnerName,
  } = person;
  const partner = (sex === 'f') ? 'husband' : 'wife';

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
        {
          isMarried ? `My ${partner}'s name is ${partnerName}` : 'I am not married'
        }
      </p>
    </section>
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
