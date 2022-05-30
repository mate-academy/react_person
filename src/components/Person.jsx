import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

function marriage(sex, isMarried, partnerName) {
  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  if (isMarried) {
    return (`My ${partnerSex}'s name is ${partnerName}`);
  }

  return ('I am not married');
}

function Person({
  props: {
    name, age, sex, isMarried, partnerName,
  },
}) {
  const personPartner = marriage(sex, isMarried, partnerName);

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {` ${name}`}
      </h2>
      <p className="Person__age">
        {
          age ? (`I am  ${age}`) : ''
        }
      </p>
      <p className="Person__parthner">
        {personPartner}
      </p>
    </section>
  );
}

Person.defaultProps = {
  name: '',
  age: undefined,
  sex: '',
  isMarried: false,
  partnerName: undefined,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,

};

export default Person;
