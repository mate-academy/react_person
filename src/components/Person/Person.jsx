export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <p>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
    </p>
    <p className="Person__partner">
      {`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}
      {person.isMarried ? '' : 'I am not married'}
    </p>
  </section>
);
