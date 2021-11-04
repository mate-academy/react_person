import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    { age && (<p className="Person__age">{`I am ${age}`}</p>) }

    { !isMarried
      ? (<p className="Person__partner">I am not married</p>)
      : (
        <p className="Person__partner">
          {`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`}
        </p>
      )
    }
  </section>
);

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
