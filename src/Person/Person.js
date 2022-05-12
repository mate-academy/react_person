import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({ user }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = user;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is&nbsp;
        {name}
      </h2>
      {sex === 'm' && (
        <p className="Person__age">
          I am&nbsp;
          {age}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried
          ? ('I am not married')
          : (`My ${
            sex === 'm'
              ? `wife's name is ${partnerName}`
              : `husband's name is ${partnerName}`}`
          )}
      </p>
    </section>
  );
};

Person.defaultProps = {
  user: {
    name: 'Name not provided',
    age: 0,
    sex: 'f',
    isMarried: false,
    partnerName: 'Name not provided',
  },
};

Person.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
