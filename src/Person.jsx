import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

function SecondPart({ data, partner }) {
  return (
    data ? (
      <p className="Person__partner">
        My husband&apos;s name is
        {partner}
      </p>
    ) : (
      <p className="Person__partner">
        I am not married
      </p>
    )
  );
}

export const Person = ({
  name,
  sex,
  age,
  isMarried,
  partnerName,
}) => (
  <>
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          My name is
          {name}
        </h2>

        {age && (
          <p className="Person__age">
            I am
            {' '}
            {age}
          </p>
        )}

        {sex === 'm' && isMarried === true ? (
          <p className="Person__partner">
            My wife&apos;s name is
            {partnerName}
          </p>
        )
          : (
            <SecondPart
              data={sex === 'f' && isMarried === true}
              partner={partnerName}
            />
          )}

      </section>
    </div>
  </>
);

Person.defaultProps = {
  partnerName: 'Do you?',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
