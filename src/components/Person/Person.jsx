function createRow(sex, isMarried, partnerName) {
  if (isMarried) {
    return sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  }

  return `I am not married`;
}

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {createRow(sex, isMarried, partnerName)}
      </p>
    </section>
  );
};
