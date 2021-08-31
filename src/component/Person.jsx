import React from "react";
import PropTypes from 'prop-types'

const Person = ({ name, age = null, sex, isMarried = null, partnerName = null }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && (<p className="Person__age">I am {age}</p>)}
      {isMarried ? (
        <p className="Person__partner">
          My {sex === 'f' ? 'husband' : 'wife'}&apos;s name is {partnerName}
        </p>) : (
        'I am not married'
      )}
    </section>
  </>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string.isRequired,
}



export default Person;