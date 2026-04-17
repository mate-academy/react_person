export const Person = ({ person, name, age, partnerName, sex, isMarried }) => {
  const data = person ?? { name, age, partnerName, sex, isMarried };
  const partnerLabel = data.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {data.name}</h2>

      {data.age !== undefined && data.age !== null && (
        <p className="Person__age">I am {data.age}</p>
      )}

      {data.isMarried === false ? (
        <p className="Person__partner">I am not married</p>
      ) : (
        data.partnerName && (
          <p className="Person__partner">
            {data.partnerName} is my {partnerLabel}
          </p>
        )
      )}
    </section>
  );
};
