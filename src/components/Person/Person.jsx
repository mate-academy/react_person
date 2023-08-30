export const Person = ({ person }) => (
  <section className="Person">

    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    <p className="Person__age">
      {person.hasOwnProperty('age') ? (
        `I am ${person.age}`
      ) : (
        null
      )}
    </p>

    <p className="Person__partner">
      {!person.isMarried ? (
        `I am not married`
      ) : (
        `${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`
      )}
    </p>
  </section>
);
