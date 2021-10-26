import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">{`I am ${age}`}</p>
    {partnerName && isMarried && (
      <p className="Person__partner">
        {`My ${sex === 'f' ? `husband's` : `wife's`} name is ${partnerName}`}
      </p>
    )}
    <p className="Person__sex">{sex}</p>
  </section>
);

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  name: 'I don\'t want to introduce myself',
  age: 'I am as old as Merlin',
  sex: 'I have not decided yet',
  isMarried: false,
  partnerName: null,
};
