import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ personInfo }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = personInfo;

  return (
    // eslint-disable-next-line
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
          ? (`My ${sex === 'f' ? ('husband') : ('wife')}'s name is ${partnerName}`)
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
