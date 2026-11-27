export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  let married = <p>I am not married</p>;
  const spouse = sex === 'm' ? 'wife' : 'husband';

  if (isMarried) {
    married = <p>{`${partnerName} is my ${spouse}`}</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`} </h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {married}
    </section>
  );
};
