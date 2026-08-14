export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p className={`${person.age ? 'Person__age' : ''}`}>
      {person.age ? `I am ${person.age}` : null}
    </p>
    <p className="Person__partner">
      {person.isMarried === true ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}` : 'I am not married'}
    </p>
  </section>
);
