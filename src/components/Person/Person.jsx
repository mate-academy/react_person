export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let parterInfo;

  if (isMarried) {
    if (sex === "m") {
      parterInfo = `${partnerName} is my wife`;
    } else {
      parterInfo = `${partnerName} is my husband`;
    }
  } else {
    parterInfo = "I am not married";
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{parterInfo}</p>
    </section>
  );
};
