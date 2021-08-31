import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const { name, age, sex, isMarried, partnerName } = props;
  const partnerSex = sex === 'f' ? "husband's" : "wife's";

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `My ${partnerSex} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
}

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

export default Person;
