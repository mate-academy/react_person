import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partner = (sex === 'f') ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name || 'noname'}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p>
        {
        isMarried
          ? `My ${partner}'s name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  isMarried: undefined,
  partnerName: null,
};

export default Person;
