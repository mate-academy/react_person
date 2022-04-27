import React from 'react';
import PropTypes from 'prop-types';

import './Person.scss';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const messageAboutPersonName = `My name is ${name}`;
  const checkMarriage = sex === 'm' ? 'wife' : 'husband';
  const messageAboutPartnerName = `My ${checkMarriage}'s name is ${partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {messageAboutPersonName}
      </h2>
      <p className="Person__age">
        { age ? `I am ${age}` : null}
      </p>
      {isMarried ? (
        <p className="Person__partner">
          {messageAboutPartnerName}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}

    </section>
  );
}

Person.defaultProps = {
  age: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['m', 'f']).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
};

export default Person;
