import React from 'react';
import PropTypes from 'prop-types';

export const Person = (props) => {
  const {
    name,
    age = null,
    sex,
    isMarried = false,
    partnerName = null,
  } = props;

  const partner = sex === 'f' ? `husband's` : `wife's`;
  const message = isMarried
    ? `My ${partner} name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {name}
      </h2>

      {age && (
        <p className="Person__age">
          {'I am '}
          {age}
        </p>
      )}

      <p className="Person__partner">
        {message}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};
