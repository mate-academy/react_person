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
  <>
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>
      {age && (
      <p className="Person__age">
        I am
        {' '}
        {age}
      </p>
      )}

      {isMarried ? (
        <p className="Person__partner">
          My
          {' '}
          {sex === 'm' ? `wife's` : `husband's`}
          {' '}
          name is
          {' '}
          {partnerName}
        </p>
      )
        : (
          <p className="Person__partner">
            I am not married
          </p>
        )
      }
    </section>
  </>
);

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  name: 'Incognito',
  age: null,
  sex: 'm',
  isMarried: false,
  partnerName: '',
};

export default Person;
