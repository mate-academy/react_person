import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partnerNarrative = sex === 'm' ? 'wife' : 'husband';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        <p className="Person__age">
          {age
            ? `I am ${age}`
            : `My age is a private variable :)`
        }
        </p>

        {!isMarried
          ? <p className="Person__partner">I am not married</p>
          : (
            <p className="Person__partner">
              {`My ${partnerNarrative}'s name is ${partnerName}`}
            </p>
          )
      }
      </section>
    </>
  );
};

Person.defaultProps = {
  age: 0,
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.number,
};
