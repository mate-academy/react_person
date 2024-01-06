export function Person({ person }) {
  const personPartnerType = person.sex === "m" ? "wife" : "husband";

  const personPartner = person.isMarried
    ? `${person.partnerName} is my ${personPartnerType}`
    : "I am not married";

  const name = `My name is ${person.name}`;
  const age = person.age && (
    <p className="Person__age">
      I am {person.age}
    </p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{name}</h2>
      {age}
      <p className="Person__partner">{personPartner}</p>
    </section>
  );
}
