export const Person = ({ person }) => {
  const clone = { ...person };
  const partner = clone.sex === 'm' ? ('wife') : ('husband');

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${clone.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${clone.age}`}
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried ? (
          `${clone.partnerName} is my ${partner}`
        ) : (
          `I am not married`
        )}
      </p>
    </section>
  )
};
