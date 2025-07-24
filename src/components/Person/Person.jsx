/* eslint-disable no-nested-ternary */
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className="Person__age">
      {person.age !== undefined && `I am ${person.age}`}
    </p>
    <p className="Person__partner">
      {person.isMarried === false
        ? `I am not married`
        : person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`}
    </p>
  </section>
);
