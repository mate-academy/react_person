import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <>
    <div className="App">
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

        <p className="Person__partner">
          {!isMarried ? 'I am not married'
            : `My
            ${(sex === 'm' && 'wife')
              || (sex === 'f' && 'husband')}'s name is
            ${partnerName}`
          }
        </p>
      </section>
    </div>
  </>
);

Person.defaultProps = {
  name: 'Secret',
  age: 18,
  sex: 'UnKnown Form of Life',
  isMarried: false,
  partnerName: 'No Partner, no name',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
