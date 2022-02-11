import React from 'react';
import './Person.scss';
import { number, string, bool } from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age
      ? (<p className="Person__age">{`I am ${age}`}</p>)
      : (null)
    }

    {!isMarried
      ? (<p className="Person__partner">I am not married</p>)
      : (
        <p className="Person__partner">
          {
          sex === 'm'
            ? `My wife's name is ${partnerName}`
            : `My husband's name is ${partnerName}`
          }
        </p>
      )}
  </section>
);

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: string.isRequired,
  age: number,
  sex: string.isRequired,
  isMarried: bool.isRequired,
  partnerName: string,
};
