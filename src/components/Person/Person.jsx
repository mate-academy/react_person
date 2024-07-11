export const Person = ({
  person: { name, age, isMarried, partnerName, sex },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age && <p className="Person__age">I am {age}</p>}
    {isMarried && sex === 'm' && (
      <p className="Person__partner">{partnerName} is my wife</p>
    )}
    {isMarried && sex === 'f' && (
      <p className="Person__partner">Maksym is my husband</p>
    )}
    {!isMarried && <p className="Person__partner">I am not married</p>}
  </section>
);
