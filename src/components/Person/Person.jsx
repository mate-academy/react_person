const pInfo = person => {
  let pText = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      pText = `${person.partnerName} is my wife`;
    } else {
      pText = `${person.partnerName} is my husband`;
    }
  } else {
    pText = 'I am not married';
  }

  return pText;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age} </p>}
    <p className="Person__partner">{pInfo(person)}</p>
  </section>
);
