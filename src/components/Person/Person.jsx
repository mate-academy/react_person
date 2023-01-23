import React from 'react';
import PropTypes from 'prop-types';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const marriedWoman = isMarried && sex === 'f';
  const marriedMan = isMarried && sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is $
        {name}
      </h2>

      {age && (
        <p className="Person__age">
          I am $
          {age}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried && 'I am not married'}
        {marriedMan && `${partnerName} is my wife`}
        {marriedWoman && `${partnerName} is my husband`}
      </p>
    </section>
  );
}

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
