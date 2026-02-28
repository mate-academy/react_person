export const Person = ({ person }) => {
  const {
    name,
    age,
    sex: gender,
    isMarried: married,
    partnerName: partner,
  } = person;

  let partnerText;

  if (!married) {
    partnerText = 'I am not married';
  } else if (gender === 'm') {
    partnerText = `${partner} is my wife`;
  } else {
    partnerText = `${partner} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{`${partnerText}`}</p>
    </section>
  );
};
