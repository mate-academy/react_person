export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <p>
      {person.age ? (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      ) : null}
    </p>
    <p className="Person__partner">
      {person.sex === 'f' ? `${person.partnerName} is my husband` : ''}
      {person.sex === 'm' ? `${person.partnerName} is my wife` : ''}
      {person.isMarried ? '' : 'I am not married'}
    </p>
  </section>
);
