import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name || 'noname'}`}
    </h2>

    {age ? (
      <p className="Person__age">{`I am ${age}`}</p>
    ) : (null)
    }

    {(() => {
      if (isMarried) {
        if (partnerName) {
          if (sex === 'm') {
            return (<p>{`My wife's name is ${partnerName}`}</p>);
          }

          if (sex === 'f') {
            return (<p>{`My husband's name is ${partnerName}`}</p>);
          }
        }

        return (<p>I am married, and my spouse&apos;s name is top secret</p>);
      }

      if (isMarried === false) {
        return (<p>I am not married</p>);
      }

      return null;
    })()}
  </section>
);

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

// how can I avoid declaring default props values
// if I already prepared  default values inside the
// component itself?
Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  isMarried: undefined,
  partnerName: null,
};

export default Person;
