// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const manOrWoman = person.sex === 'm'
    ? `${person.partnerName} is my wife`
    : `${person.partnerName} is my husband`;

  const marriedOrNo = person.isMarried ? manOrWoman : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {Object.hasOwn(person, 'age') && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}

      <p className="Person__partner">{`${marriedOrNo}`}</p>
    </section>
  );
};
