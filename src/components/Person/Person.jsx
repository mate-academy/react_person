// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  let maritalStatus = <p className="Person__partner">I am not married</p>;

  if (person.isMarried) {
    maritalStatus = (
      <p className="Person__partner">
        {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {maritalStatus}
    </section>
  );
};
