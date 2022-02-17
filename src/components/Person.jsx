import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
  name,
  age,
  partnerName,
  sex,
  isMarried,
}) => {
  const maried = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    switch (sex) {
      case 'm':
        return `My wife's name is ${partnerName}`;
      case 'f':
        return `My husband's name is ${partnerName}`;
      default:
        return '';
    }
  };

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
        {maried()}
      </p>

    </section>
  );
};

Person.defaultProps = {
  name: 'no name',
  age: null,
  partnerName: 'no name',
  sex: 'no data',
  isMarried: false,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  partnerName: PropTypes.string,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
};

export default Person;
