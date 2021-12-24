import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({
  name,
  sex,
  age,
  isMarried,
  partnerName,
}) {
  const marryStatus = sex === 'f' ? `husband's` : `wife's`;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          My name is
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
            ? `My ${marryStatus} name is
          ${partnerName}`
            : `I am not married`}
        </p>

      </section>
    </div>
  );
}

Person.defaultProps = {
  partnerName: 'What is the name of your partner?',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
