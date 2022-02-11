import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ name, age, isMarried, sex, partnerName }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm'
            ? `wife's`
            : `husband's`} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  </>
);

Person.defaultProps = {
  name: 'Unknown',
  partnerName: 'Unknown',
};

Person.propTypes = {
  name: PropTypes.string,
  partnerName: PropTypes.string,
};

export default Person;
