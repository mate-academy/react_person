export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personName = <h2 className="Person__name">{`My name is ${name}`}</h2>;
  let personAge;
  let partner;

  if (age) {
    personAge = <p className="Person__age">{`I am ${age}`}</p>;
  }

  if (!isMarried) {
    partner = <p className="Person__partner">I am not married</p>;
  }

  if (isMarried) {
    if (sex === 'm') {
      partner = (
        <p className="Person__partner">{`${partnerName} is my wife`}</p>
      );
    } else {
      partner = (
        <p className="Person__partner">{`${partnerName} is my husband`}</p>
      );
    }
  }

  return (
    <section className="Person">
      {personName}
      {personAge}
      {partner}
    </section>
  );
};
