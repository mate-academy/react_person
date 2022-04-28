import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age ? `I am ${age}` : null}
      </p>
      <p className="Person__partner">
        {
          isMarried
            ? `My ${partner}&apos;s name is ${partnerName}`
            : 'I am not married'
        }
      </p>
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
