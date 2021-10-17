import React from "react";
import PropTypes from "prop-types";

function Person({ name, age, sex, isMarried = false, partnerName }) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `My ${sex === "m" ? "wife's" : "husband's"} name is ${partnerName}`
          : "I am not married"}
      </p>
    </section>
  );
}

export default Person;

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(["m", "f"]).isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};
