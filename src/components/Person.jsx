import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    {/* {age !== 0 ? (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    ) : (
      null
    )} */}
    {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    {isMarried ? (
      <p className="Person__partner">
        {'My '}
        {sex === 'm'
          ? 'wife\'s'
          : 'husband\'s'
        }
        {` name is ${partnerName}`}
      </p>
    ) : (
      'I am not married'
    )

      }
  </section>
);

Person.defaultProps = {
  age: null,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number || null,
  sex: PropTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
