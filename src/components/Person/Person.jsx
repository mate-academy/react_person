export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const notMarried = <p className="Person__partner">I am not married</p>;
  let married;

  if (isMarried) {
    married =
      sex === 'm' ? (
        <p className="Person__partner">{partnerName} is my wife</p>
      ) : (
        <p className="Person__partner">{partnerName} is my husband</p>
      );
  }

  // console.log(wifeOrHusband);

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? married : notMarried}
    </section>
  );
};
