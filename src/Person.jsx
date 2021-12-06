import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, age, isMarried, sex, partnerName }) => (
  <section className="person">
    <h2 className="person__name">
      {`My name is ${name}`}
    </h2>

    {age && (
      <p className="person__age">{`I am ${age}`}</p>
    )}

    {isMarried ? (
      <p className="person__partner">
        {sex === 'm'
          ? `My wife's name is ${partnerName}`
          : `My husband's's name is ${partnerName}`
        }
      </p>
    ) : (
      <p>I am not married</p>
    )}
  </section>
);

Person.defaultProps = {
  name: 'Person',
  age: null,
  sex: null,
  isMarried: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export { Person };
