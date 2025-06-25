export function Person({ person: { name, age, isMarried, sex, partnerName } }) {
  const partnersRole = {
    f: 'husband',
    m: 'wife',
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnersRole[sex]}`
          : 'I am not married'}
      </p>
    </section>
  );
}
