export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried, sex } = person;
  let partner = <p className="Person__partner">{partnerName} is my husband</p>;

  if (sex === 'm') {
    partner = <p className="Person__partner">{partnerName} is my wife</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        partner
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
