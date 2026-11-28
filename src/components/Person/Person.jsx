export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  let married = <p className="Person__partner">I am not married</p>;
  let spouse = 'husband';

  if (sex === 'm') {
    spouse = 'wife';
  }

  if (isMarried) {
    married = (
      <p className="Person__partner">{`${partnerName} is my ${spouse}`}</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}
      {married}
    </section>
  );
};
