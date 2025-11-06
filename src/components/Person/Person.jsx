function MarriedInfo({ sex, partnerName }) {
  if (sex === 'm') {
    return (
      <p className="Person__partner">{`${partnerName} is my wife`}</p>
    );
  } else {
    return (
      <p className="Person__partner">{`${partnerName} is my husband`}</p>
    );
  }
}

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age != null && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried ? (
        <MarriedInfo sex={sex} partnerName={partnerName} />
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};

