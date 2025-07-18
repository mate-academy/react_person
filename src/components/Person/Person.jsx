// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  let partner;

  if (person.isMarried) {
    partner =
      person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : `${person.partnerName} is my husband`;
  } else {
    partner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__partner">{partner}</p>
      {typeof person.age === 'number' && (
        <p className="Person__age">I am {person.age}</p>
      )}
    </section>
  );
};
