// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const MALE = 'm';

  const partnerRole =
    sex === `${MALE}`
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;

  const partnerStatus = isMarried ? partnerRole : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
