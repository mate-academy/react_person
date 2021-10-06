import React from 'react';
import PropTypes from 'prop-types';

const Person = (
  { name,
    age,
    sex,
    isMarried,
    partnerName },
) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        { `My name is ${name}` }
      </h2>

      { age
        && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        )
      }

      { isMarried
        && (
          <p className="Person__partner">
            {`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`}
          </p>
        )
      }
    </section>
  </>
);

Person.defaultProps = {
  name: '',
  age: '',
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;
