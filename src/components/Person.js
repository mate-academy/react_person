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
  <>
    <h2>{`My name is ${name}`}</h2>

    {age ? (<p>{`I am ${age}`}</p>) : (null)}

    {!isMarried ? (<p>I am not married</p>) : (
      <p>
        {
        sex === 'm'
          ? `My wife's name is ${partnerName}`
          : `My husband's name is ${partnerName}`
        }
      </p>
    )}
  </>
);

Person.defaultProps = {
  name: null,
  age: null,
  sex: null,
  isMarried: false,
  partnerName: false,
};

Person.propTypes = {
  name: string,
  age: number,
  sex: string,
  isMarried: bool,
  partnerName: string,
};
