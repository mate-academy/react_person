import React from 'react';

export function Person(props) {
  const { name, age, partnerName, sex, isMarried } = props.person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        { isMarried
          ? `My ${sex === 'm' ? "wife's" : "husband's"} name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
}

Person.propTypes = {
  person = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool.isRequired,
    partner: PropTypes.string,
  }
}

Person.defaultProps = {
  person = {
    age: undefined,
    partner: undefined,
  }
}
