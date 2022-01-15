import React from 'react';
import PropTypes from 'prop-types';

const partnerGender = sex => (sex === 'm' ? `wife's` : `husband's`);

export const Person = ({ name, age, partnerName, sex, isMarried }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : ''}</p>
      <p className="Person__partner">
        {isMarried
          ? `${`My ${partnerGender(sex)} name is ${partnerName}`}`
          : 'I am not married'}
      </p>
    </section>
  </div>
);

Person.defaultProps = {
  name: '',
  age: '',
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
