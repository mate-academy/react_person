export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      {sex === 'm' && isMarried && (
        <p className="Person__partner">{partnerName} is my wife</p>
      )}

      {sex === 'f' && isMarried && (
        <p className="Person__partner">{partnerName} is my husband</p>
      )}

      {!isMarried && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
