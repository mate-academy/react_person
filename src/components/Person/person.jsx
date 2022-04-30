import React from 'react';
import PropTypes from 'prop-types';
import './person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = sex === 'f' ? 'hasband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age || age === 0 ? `I am ${age}` : null}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
