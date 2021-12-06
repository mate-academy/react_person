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
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  age: PropTypes.number,
  partnerName: PropTypes.string,
};
