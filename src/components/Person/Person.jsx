export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const personPartner = sex === 'f' ? 'husband' : 'wife';

  const partner = isMarried
    ? `${partnerName} is my ${personPartner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">{partner}</p>
    </section>
  );
};
