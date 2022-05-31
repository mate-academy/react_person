import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = person;

  const partner = sex === 'm' ? `My wife's name is ${partnerName}`
    : `My husband's name is ${partnerName}`;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        {isMarried
          ? <p className="Person__partner">{partner}</p>
          : <p className="Person__partner">I am not married</p>}
      </section>
    </>
  );
};

Person.propTypes = {
  // eslint-disable-next-line react/require-default-props
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
