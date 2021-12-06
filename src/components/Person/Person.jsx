import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

export const Person = (props) => {
  const { name, age, sex, isMarried, partnerName } = props;
  const whoIswho = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="person">
      <h2 className="person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="person__partner">
        {isMarried
          ? `My ${whoIswho}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: 'Ihor',
  age: null,
  sex: null,
  isMarried: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string.isRequired,
};
