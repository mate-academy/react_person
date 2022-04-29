import React from 'react';
import './People.scss';
import PropTypes from 'prop-types';

const People = ({ reference }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = reference;

  const partnerCheck = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <article className="People">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        <p className="Person__partner">
          {isMarried
            ? `My ${partnerCheck}'s name is ${partnerName}`
            : 'I am not married'
          }
        </p>
      </section>
    </article>
  );
};

People.defaultProps = {
  age: 0,
  sex: '',
  isMarried: null,
  partnerName: PropTypes.string,
};

People.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default People;
