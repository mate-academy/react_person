export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}
    <p className="Person__partner">
      {!person.isMarried
        ? 'I am not married'
        : Maried(person.sex, person.partnerName)}
    </p>
  </section>
);

function Maried(sex, partnerName) {
  return sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;
}
