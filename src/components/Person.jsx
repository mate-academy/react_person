/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  age,
  partnerName,
  sex,
}) => {
  const isWifeOrHusband = sex === 'f'
    ? 'husband'
    : 'wife';

  const hasPartner = partnerName
    ? `My ${isWifeOrHusband}'s name is ${partnerName}`
    : <p>I am not married</p>;

  return (
    <section className="Person">
      {
        name && (
          <h2 className="Person__name">
            My name is&nbsp;
            {name}
          </h2>
        )

      }

      {
        age && (
          <p className="Person__age">
            I am&nbsp;
            { age }
          </p>
        )
      }

      {
        hasPartner
      }
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  partnerName: PropTypes.string,
};

export default Person;
