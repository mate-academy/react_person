export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerRole = 'husband';

  if (sex === 'm') {
    partnerRole = 'wife';
  }

  let partnerInfo = 'I am not married';

  if (isMarried) {
    partnerInfo = `${partnerName} is my ${partnerRole}`;
  }

  const ageInfo =
    age !== undefined ? <p className="Person__age">I am {age}</p> : null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {ageInfo}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
