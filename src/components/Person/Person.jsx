/* eslint-disable no-nested-ternary */
export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && person.age !== 0 ? (
        <p className="Person__age">I am {person.age}</p>
      ) : null}
      {person.isMarried ? (
        <p className="Person__partner">
          {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
        </p>
      ) : (
        <p className="Person__partner"> I am not married </p>
      )}
    </section>
  );
};
