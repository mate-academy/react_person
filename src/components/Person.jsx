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
