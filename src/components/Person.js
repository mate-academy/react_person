import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({ name, age, sex, isMarried, partnerName }) {
  const partnerGender = sex === 'm' ? `wife's` : `husband's`;

  return (
    <div className="App">
      <section className="Person">
        {name && (
          <h2 className="Person__name">{`My name is ${name}`}</h2>
        )}

        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        {isMarried
          ? (
            <p className="Person__partner">
              {`My ${partnerGender} name is ${partnerName}`}
            </p>
          )
          : (
            <p className="Person__partner">
              I am not married
            </p>
          )
        }
      </section>
    </div>
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
