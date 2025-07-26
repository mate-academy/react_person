const partnerInfo = person => {
  let partnerText = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerText = `${person.partnerName} is my wife`;
    } else {
      partnerText = `${person.partnerName} is my husband`;
    }
  } else {
    partnerText = 'I am not married';
  }

  return partnerText;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">{partnerInfo(person)}</p>
  </section>
);
