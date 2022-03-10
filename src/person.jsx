import React from 'react';
import PropTypes from 'prop-types';

class Partner {
  constructor(name, spouseSex) {
    this.noun = spouseSex === 'm'
      ? 'wife'
      : 'husband';
    this.name = name;
  }

  toPossesiveCase() {
    return `${this.noun}'s`;
  }
}

export function Person({ name, sex, age, isMarried, partnerName }) {
  const partner = new Partner(partnerName, sex);

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>)}
      <p className="Person__partner">
        {isMarried
          ? `My ${partner.toPossesiveCase()} name is ${partner.name}`
          : `I am not married`}
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: 'unknown',
  sex: 'unknown',
  age: null,
  isMarried: false,
  partnerName: 'unknown',
};

Person.propTypes = {
  name: PropTypes.string,
  sex: PropTypes.oneOf(['f', 'm']),
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
