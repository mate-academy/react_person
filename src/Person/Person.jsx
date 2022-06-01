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
  const partnerType = sex === 'm'
    ? 'wife'
    : 'husband';

  const partner = isMarried
    ? `My ${partnerType}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      <p className="Person__partner">
        {partner}
      </p>

      {age && (
        <p className="Person__age">
          I am {age}
        </p>
      )}
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf('m' || 'f').isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

export default Person;
