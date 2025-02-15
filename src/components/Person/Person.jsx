// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age ? <p className="Person__age">I am {person.age}</p> : ''}

      {person.isMarried === false ? (
        <p className="Person__partner">I am not married</p>
      ) : null}
      {person.isMarried === true && person.sex === 'm' ? (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      ) : null}
      {person.isMarried === true && person.sex === 'f' ? (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      ) : null}
    </section>
  );
};
