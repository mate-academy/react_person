import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

const Person = ({
                  name,
                  age,
                  sex,
                  isMarried,
                  partnerName
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age > 0 ? (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      ) : ''}
      {isMarried && (
        <>
          {sex === 'm' ? (
            <p className="Person__partner">
              My wife&apos;s name is
              {' '}
              {partnerName}
            </p>
          ) : (
            <p className="Person__partner">
              My husband&apos;s name is
              {' '}
              {partnerName}
            </p>
          )}
        </>
      )}
    </section>
  </>
);

Person.defaultProps = {
  name: '',
  age: '',
  sex: '',
  isMarried: '',
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.number,
  partnerName: PropTypes.string,
};

export default Person;
