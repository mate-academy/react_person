export const Person = ({ person }) => {
  let partnerText;

  if (person.sex === 'f' && person.isMarried === true) {
    partnerText = `${person.partnerName} is my husband`;
  } else if (person.sex === 'm' && person.isMarried === true) {
    partnerText = `${person.partnerName} is my wife`;
  } else {
    partnerText = 'not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
