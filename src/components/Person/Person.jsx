export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">
      {person.isMarried ? (
        <>
          {person.partnerName}
          <span>{person.sex === 'f' ? ' is my husband' : ' is my wife'}</span>
        </>
      ) : (
        <span>I am not married</span>
      )}
    </p>
  </section>
);
