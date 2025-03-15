export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  let hasPartner = <p className="Person__partner">I am not married</p>;

  if (sex === 'm' && isMarried) {
    hasPartner = (
      <p className="Person__partner">{`${partnerName} is my wife`}</p>
    );
  }

  if (sex === 'f' && isMarried) {
    hasPartner = (
      <p className="Person__partner">{`${partnerName} is my husband`}</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {hasPartner}
    </section>
  );
};
