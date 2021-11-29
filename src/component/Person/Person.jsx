import React from 'react';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partnerSex = (sex === 'm')
    ? 'wife'
    : 'husband';

  const personParnter = isMarried
    ? `My ${partnerSex} name is ${partnerName}`
    : 'No partner';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      <p className="Person__partner">
        {personParnter}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};

export default Person;
