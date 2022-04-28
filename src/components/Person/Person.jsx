import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partnerSex = (sex === 'f') ? `husband's` : `wife's`;
  const partnerNamePrint = (partnerName)
    ? `My ${partnerSex} name is ${partnerName}`
    : 'I am married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {
          (isMarried)
            ? partnerNamePrint
            : `I am not married`
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
