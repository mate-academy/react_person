export const Person = ({ person }) => {
  const femaleSex = 'f';
  const { name, age, partnerName } = person;
  const partnerSex = person.sex === femaleSex ? 'husband' : 'wife';

  return (
    <section className="Person">

      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {person.age >= 0 && <p className="Person__age">{`I am ${age}`}</p>}

      {person.isMarried
        ? <p className="Person__partner">{`${partnerName} is my ${partnerSex}`}</p>
        : <p className="Person__partner">I am not married</p>
      }
    </section>
  );
};
