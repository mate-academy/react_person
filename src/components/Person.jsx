import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : `I am not married`}
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: 'However',
  sex: undefined,
  age: undefined,
  isMarried: false,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
