export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;

  let partnerText = null;

  if (isMarried && partnerName) {
    partnerText =
      sex === 'f'
        ? `${partnerName} is my husband`
        : `${partnerName} is my wife`;
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      {name && <h2 className="Person__name">My name is {name}</h2>}
      {age !== null && age !== undefined && (
        <p className="Person__age">I am {age}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
