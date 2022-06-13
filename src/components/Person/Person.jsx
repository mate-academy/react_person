import React from 'react';

const Person = (
  name,
  age,
  sex,
  isMarried,
  partnerName,
) => (
  <section className='Person'>
    <h2 className='Person__name'>{name}</h2>
    {age ? (
      <p className='Person__age'>{age}</p>
    ) : null}
    <p className='Person__partner'>
      {partnerName ? `{partnerName}` : 'I am not married'}
    </p>
  </section>
)

export default Person;
