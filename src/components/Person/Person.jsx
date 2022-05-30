import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({
  name, age, sex, isMarried, partnerName,
}) => {
  const spouse = sex !== 'm' ? 'husband' : 'wife';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          My name is&nbsp;
          {name}
        </h2>
        {age && (
          <p className="Person__age">
            I am&nbsp;
            {age}
          </p>
        )}
        <p className="Person__partner">
          {isMarried
            ? `My ${spouse}'s name is ${partnerName}`
            : 'I am not married'}
        </p>
      </section>
    </>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
