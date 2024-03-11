/* eslint-disable no-nested-ternary */
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {`${person.name}`}</h2>

    {person.age !== undefined && (
      <p className="Person__age">I am {`${person.age}`}</p>
    )}

    {person.isMarried === true && person.sex === 'f' ? (
      <p className="Person__partner">{`${person.partnerName}`} is my husband</p>
    ) : person.isMarried === false ? (
      <p className="Person__partner">I am not married</p>
    ) : (
      <p className="Person__partner">{`${person.partnerName}`} is my wife</p>
    )}
  </section>
);
