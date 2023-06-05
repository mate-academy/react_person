import React from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerStatus = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className={styles.Person}>
      <h2 className={styles.Person__name}>
        {`My name is ${name}`}
      </h2>

      <p className={styles.Person__age}>
        {age && (
          `I am ${age}`
        )}
      </p>

      <p className={styles.Person__partner}>
        {isMarried ? (
          `${partnerName} is my ${partnerStatus}`
        ) : (
          'I am not married'
        )}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};
