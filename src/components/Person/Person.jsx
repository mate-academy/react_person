// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText;

  if (isMarried) {
    const partnerTitle = sex === 'm' ? 'wife' : 'husband';

    partnerText = `${partnerName} is my ${partnerTitle}`;
  } else {
    partnerText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
