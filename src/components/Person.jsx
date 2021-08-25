import React from 'react';
import PropsTypes from 'prop-types'
import './Person.scss';

export function Person({ name, age, sex, isMarried, partnerName}) {
  return (
    <section className="Person">    
      <h2 className='Person__name'>
        My name is {name}
      </h2>    
    {age && (
      <p className="Person__age">
        I am {age}
      </p>
    )}
    {isMarried 
      && sex === 'f' 
      && (
      <p className="Person__partner">
        My husband&apos;s name is {partnerName}
      </p>
    )}
    {isMarried 
      && sex === 'm' 
      && (
        <p className="Person__partner">
          My wife&apos;s name is {partnerName}
        </p>
    )}
    { isMarried || (
      <p className="Person__partner">
        I am not married
      </p>
    )}    
    </section>
  )
};

Person.propsTypes  = {
  name: PropsTypes.string.isRequired,
  age: PropsTypes.number,
  sex: PropsTypes.oneOf(['m', 'f']).isRequired, 
  isMarried: PropsTypes.bool, 
  partnerName: PropsTypes.string,
};
