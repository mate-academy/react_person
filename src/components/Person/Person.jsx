export const Person = ({person}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className="Person__age">{person.name ? `I am ${person.age}` : null}</p>
    <p className="Person__partner">
      {person.isMarried ? (
        `${person.partnerName} is my

        ${person.sex === 'f' ? 'husband' : 'wife'}`)

        : 'I am not married'}
    </p>
  </section>
);
