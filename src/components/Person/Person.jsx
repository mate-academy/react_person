// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  let partnerText = '';

  if (person.isMarried === false) {
    partnerText = 'I am not married';
  } else if (person.sex === 'm') {
    partnerText = `${person.partnerName} is my wife`;
  } else {
    partnerText = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
