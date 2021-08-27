import React from 'react';
import PropsTypes from 'prop-types'
import './Person.scss';

export function Person({ name, age, sex, isMarried, partnerName}) {
  const partner = sex === 'm' ? 'wife' : 'husband';
  const messageMarried = isMarried
    ? `My ${partner}'s name is ${partnerName}`
    : 'I am not married';
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
    <p>
    <p className="Person__partner">
      {messageMarried}
    </p>
    </p>      
    </section>
  )
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propsTypes  = {
  name: PropsTypes.string.isRequired,
  age: PropsTypes.number,
  sex: PropsTypes.oneOf(['m', 'f']).isRequired, 
  isMarried: PropsTypes.bool.isRequired, 
  partnerName: PropsTypes.string,
};
