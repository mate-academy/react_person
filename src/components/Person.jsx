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
  const spouse = sex === 'm' ? 'wife\'s' : 'husband\'s';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">
          {isMarried ? (
            `My ${spouse} name is ${partnerName}`
          ) : ('I am not married')}
        </p>
      </section>
    </>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: 'no partner',
};
