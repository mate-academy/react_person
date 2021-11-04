import React from 'react';
import PropTypes from 'prop-types';

export const Person = ({
  name,
  age,
  partnerName,
  sex,
  isMarried,
}) => {
  const partnerSex = sex === 'f' ? `husband's` : `wife's`;

  const partnerInfo = isMarried
    ? `My ${partnerSex}'s name is ${partnerName}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {partnerInfo}
      </p>
    </section>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  sex: null,
  isMarried: false,
  partnerName: null,
};
