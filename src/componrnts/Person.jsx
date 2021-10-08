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
  let strIfMarried = 'I am not married';

  if (isMarried) {
    strIfMarried
    = (sex === 'f')
        ? `My wife's name is ${partnerName}`
        : `My husband's name is ${partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      { age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{strIfMarried}</p>
    </section>
  );
}

Person.defaultProps = {
  age: undefined,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
