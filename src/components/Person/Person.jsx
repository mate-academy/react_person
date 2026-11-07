// export const Person = ({ person }) => ();
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>

    {person.age !== undefined && (
      <p className="Person__age">
        <span>I am {person.age}</span>
      </p>
    )}
    <p className="Person__partner">
      {person.isMarried === true ? (
        <span>
          {person.partnerName} is my
          {person.sex === 'm' ? <span> wife</span> : <span> husband</span>}
        </span>
      ) : (
        <span>I am not married</span>
      )}
    </p>
  </section>
);
