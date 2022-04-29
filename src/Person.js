import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ props }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = props;

  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age && `I am ${age}`}
      </p>

      <p className="Person__partner">
        {isMarried
          ? `My ${partnerSex} name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  sex: null,
  isMarried: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
