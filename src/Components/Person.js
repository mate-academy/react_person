import React from 'react';
import PropTypes from 'prop-types';

const Person = (person) => (
  <section className="Person">
    <>
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__age"> {person.age} ? I am {person.age} : null</p>
      <p className="Person__partner">
        {person.partnerName &&(
          person.sex === "m" ? 
            `My husband&apos;s name is ${person.partnerName}` :
            `My wife&apos;s name is ${person.partnerName}`
        )}

        {person.isMarried === false &&(
          'I am not married'
        )}
      </p>
    </>
  </section>  
);

Person.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number,
  partnerName : PropTypes.string,
  sex : PropTypes.string,
  isMarried : PropTypes.bool
}

export default Person;
