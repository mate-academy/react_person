export const Person = ({ person }) => {
  const { name, isMarried, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      {isMarried &&
        (sex === 'm' ? (
          <p className="Person__partner">{partnerName} is my wife</p>
        ) : (
          <p className="Person__partner">{partnerName} is my husband</p>
        ))}

      {!isMarried && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
