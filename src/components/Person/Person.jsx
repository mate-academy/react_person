// src/components/Person/Person.jsx
export default function Person({ person }) {
  // pega partnerName e dá um alias para 'partner'
  const { name, age, sex, isMarried, partnerName: partner } = person;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      {isMarried ? (
        <p className="Person__partner">
          {partner} is my {partnerLabel}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}
