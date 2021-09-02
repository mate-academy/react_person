import React from 'react';
import PropTypes from 'prop-types';

export function Person(props) {
  const { person } = props;
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        {age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}
        <p className="Person__partner">
          { isMarried
            ? `My ${sex === 'f' ? 'husband' : 'wife'}'s name is ${partnerName}`
            : 'I am not married' }
        </p>
      </section>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};
