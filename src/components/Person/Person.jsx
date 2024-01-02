export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className={`${person.age !== undefined ? 'Person__age' : ''}`}>
      {`I am ${person.age}`}
    </p>

    <p className={`${person.sex === 'f' ? 'Person__partner' : ''}`}>
      {person.isMarried ? `${person.partnerName} is my husband` : 'I am not married'}
    </p>

    <p className={`${person.sex === 'm' ? 'Person__partner' : ''}`}>
      {person.isMarried ? `${person.partnerName} is my wife` : 'I am not married'}
    </p>
  </section>
);
