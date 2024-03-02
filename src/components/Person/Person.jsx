export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partner;

  if (isMarried) {
    if (sex === 'm') {
      const partnerType = 'wife';

      partner = `${partnerName} is my ${partnerType}`;
    } else {
      const partnerType = 'husband';

      partner = `${partnerName} is my ${partnerType}`;
    }
  } else {
    partner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
