import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  function partner(s) {
    return s === 'm' ? 'wife' : 'husband';
  }

  return (
    <section className="Person">

      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        age
          ? (
            <p className="Person__age">
              {`I am ${age}`}
            </p>
          )

          : null
      }

      <p className="Person__partner">
        {
          isMarried
            ? `My ${partner(sex)}'s name is ${partnerName}`
            : 'I am not married'
        }
      </p>

    </section>
  );
};

Person.defaultProps = {
  name: '',
  age: 0,
  sex: 'm',
  isMarried: false,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
