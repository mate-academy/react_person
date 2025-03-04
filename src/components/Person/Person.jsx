export const Person = ({ person }) => {
  let personMarried = <p className="Person__partner">I am not married</p>;

  if (person.isMarried) {
    personMarried = (
      <p className="Person__partner">
        {person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      {personMarried}
    </section>
  );
};
