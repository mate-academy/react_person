import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ perInfo }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = perInfo;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`i am ${age}`}
        </p>
      )}

      <p className="Person__partner">

        {isMarried
          ? (`My ${sex === 'f' ? 'husband' : 'wife'}'s is ${partnerName}`)
          : ('I am not married')}

      </p>
    </section>
  );
};

Person.defaultProps = {
  perInfo: {
    age: 0,
    partnerName: '',
  },
};

Person.propTypes = {
  perInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
