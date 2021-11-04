import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partnerGender = sex === 'm' ? `wife's` : `husband's`;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        <p className="Person__partner">
          {isMarried
            ? `My ${partnerGender} name is ${partnerName}`

            : `I am not married`
          }
        </p>
      </section>
    </div>
  );
}

Person.defaultProps = {
  age: null,
  partnerName: 'in sectret',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
