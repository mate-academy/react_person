export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerField = 'I am not married';

  if (isMarried) {
    partnerField =
      sex === 'f'
        ? `${partnerName} is my husband`
        : `${partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerField}</p>
    </section>
  );
};
