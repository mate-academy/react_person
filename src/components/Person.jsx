import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  let partner = '';

  if (props.sex === 'm') {
    partner = 'wife\'s';
  } else {
    partner = 'husband\'s';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        {props.name}
      </h2>
      {props.age
        ? (
          <p className="Person__age">
            I am&nbsp;
            {props.age}
          </p>
        )
        : null
      }
      <p className="Person__partner">
        {props.isMarried
          ? (`My ${partner} name is ${props.partnerName}`)
          : (`I am not married`)
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

export default Person;
