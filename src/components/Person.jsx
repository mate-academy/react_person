import React from "react";
import PropTypes from 'prop-types';



const Person = ({ name, age, sex, isMarried, partnerName }) => {
  
  let partner = sex === 'm' ? `wife's` : `husband's`;

  return (
    <>
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {/* age && не работает так как возвращается дефолтное 0 true*/}
      {age ? (
        <p className="Person__age">I am {age}</p>
      ) : null}
      {isMarried ? (
        <p className="Person__partner">My {partner} name is {partnerName}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
    </>
  )}

Person.defaultProps = {
  age: 0,
  partnerName: null,
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
}

export default Person;
