export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;

  const returnPartner = (s, partner) => {
    return s === 'm' ? (
      <p className="Person__partner">{partner} is my wife</p>
    ) : (
      <p className="Person__partner">{partner} is my husband</p>
    );
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        returnPartner(sex, partnerName)
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
