export const Person = ({ person }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.sex === 'm' ? (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      ) : (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      )}
    </section>
  </>
);
