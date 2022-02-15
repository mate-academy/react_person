import React from 'react';
import PropTypes from 'prop-types';

function infoAboutPartner(sex, partner) {
  if (sex === 'm') {
    return `My wife's name is ${partner}`;
  }

  return `My husband's name is ${partner}`;
}

function Person({ name, age, sex, isMarried, partner }) {
  const info = infoAboutPartner(sex, partner);

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? info
          : 'I am not married'
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partner: PropTypes.string,
  sex: PropTypes.string,
};

Person.defaultProps = {
  name: 'Name',
  age: 'Secret age',
  sex: 'Some gender',
  partner: '',
};
