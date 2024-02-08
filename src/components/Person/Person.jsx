export const Person = ({ person }) => {
  const { name } = person;

  const ageOfPerson
    = person.age
      ? <p className="Person__age">{`I am ${person.age}`}</p>
      : '';

  const partner
    = person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {ageOfPerson}

      <p className="Person__partner">
        {person.isMarried ? partner : 'I am not married'}
      </p>
    </section>
  );
};
