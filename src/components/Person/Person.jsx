export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let married = 'I am not married';

  if (isMarried === true) {
    if (sex === 'm') {
      married = `${partnerName} is my wife`;
    } else if (sex === 'f') {
      married = `${partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{married}</p>
    </section>
  );
};
