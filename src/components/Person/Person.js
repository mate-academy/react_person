import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const gender = sex === 'm' ? `wife's` : `husband's`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      <p className="Person__partner">
        {isMarried ? `My ${gender} name is ${partnerName}` : `I am not married`}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
  sex: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: undefined,
  partnerName: undefined,
};

export default Person;
