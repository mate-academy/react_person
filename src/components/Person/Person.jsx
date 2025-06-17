export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  let partnerText = null;

  if (isMarried && partnerName) {
    partnerText = `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
