const whoIsPartner = (sex, partnerName, isMarried) => {
  if (sex === 'm' && isMarried) {
    return <p className="Person__partner">{partnerName} is my wife</p>;
  }

  if (sex === 'f' && isMarried) {
    return <p className="Person__partner">{partnerName} is my husband</p>;
  }

  return null;
};

export const Person = ({
  person: { name, age, isMarried, sex, partnerName },
}) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      {!isMarried && <p className="Person__partner">I am not married</p>}
      {whoIsPartner(sex, partnerName, isMarried)}
    </section>
  </div>
);
