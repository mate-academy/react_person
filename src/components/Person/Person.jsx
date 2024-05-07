export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  let partnerStatus;

  if (isMarried) {
    const partnerType = sex === 'f' ? 'husband' : 'wife';

    partnerStatus = `${partnerName} is my ${partnerType}`;
  } else {
    partnerStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
