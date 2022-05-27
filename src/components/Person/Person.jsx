import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ personInfo }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = personInfo;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? (`My ${partner}'s name is ${partnerName}`)
          : ('I am not married')}
      </p>
    </section>
  );
};

Person.defaultProps = {
  personInfo: {
    age: 0,
    partnerName: '',
  },
};

Person.propTypes = {
  personInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
