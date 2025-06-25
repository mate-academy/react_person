export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let maritalStatus = 'I am not married';

  if (isMarried) {
    maritalStatus = sex === 'm' ? `${partnerName} is my wife` : `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};
