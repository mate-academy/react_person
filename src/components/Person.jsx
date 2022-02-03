import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({ name, age, sex, partnerName, isMarried }) => ((
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      <p className="Person__age">
        {age && (`I am ${age}`)}
      </p>
      <p className="Person__partner">
        {!isMarried ? 'I am not married'
          : `My
        ${isMarried && ((sex === 'm' && 'wife')
            || (sex === 'f' && 'husband'))}'s name is
        ${partnerName}`
        }
      </p>
    </section>
  </div>
));

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Person;
