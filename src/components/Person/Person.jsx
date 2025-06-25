export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age > 0 && <p className="Person__age">{`I am ${person.age}`}</p>}
      {person.isMarried ? (
        <p className="Person__partner">
          {`${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
        </p>
      ) : (
        <p>I am not married</p>
      )}
    </section>
  );
};
