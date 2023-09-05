export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className="Person__age">{`${person.age === undefined ? '' : ` I am ${person.age}`}`}</p>
    <p className="Person__partner">
      {person.isMarried && person.sex === 'm' && (
        `${person.partnerName} is my wife`
      )}
      {person.isMarried && person.sex === 'f' && (
        `${person.partnerName} is my husband`
      )}
      {person.isMarried === false && (
        `I am not married`
      )}
    </p>
  </section>
);
