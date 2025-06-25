export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className="Person__age">
      {person.age ? <span>I am ${person.age}</span> : null}
    </p>
    {person.isMarried === true ? (
      <p className="Person__partner">
        {person.sex === 'm' ? (
          <span>${person.partnerName} is my wife</span>
        ) : (
          <span>${person.partnerName} is my husband</span>
        )}
      </p>
    ) : (
      <p>I am not married</p>
    )}
  </section>
);
