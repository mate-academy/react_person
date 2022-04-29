import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = ({ human }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = human;

  const partner = (sex === 'm') ? 'wife' : 'husband';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age && (
        <p className="Person__age">{`I'm ${age}`}</p>
        )}

        <p className="Person__partner">
          {isMarried
            ? `My ${partner}'s name is ${partnerName}`
            : "I'm not married"
        }
        </p>
      </section>
    </div>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
