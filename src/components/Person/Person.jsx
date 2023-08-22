import './Person.scss';

export const Person = ({ person }) => {
  const spouseGender = person.sex === 'm'
    ? 'wife'
    : 'husband';

  const marriageInformation = person.isMarried
    ? `${person.partnerName} is my ${spouseGender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {Boolean(person.age) > 0 && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">{marriageInformation}</p>
    </section>
  );
};
