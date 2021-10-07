import React from "react";
import PropTypes from 'prop-types';

const Person = ({ name, age, sex, isMarried, partnerName }) => (
    <>
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && (<p className="Person__age">I am {age}</p>)}
      { isMarried && sex === 'm' && (<p className="Person__partner">My wife&apos;s name is {partnerName}</p>)}
      { isMarried && sex === 'f' && (<p className="Person__partner">My husband&apos;s name is {partnerName}</p>)}
    </section>
    </>
)

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partner: PropTypes.string,
}

export default Person;