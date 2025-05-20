export const Person = ({ person }) => {
  let text;

  if (!person.isMarried) {
    text = 'I am not married';
  } else if (person.sex === 'f') {
    text = `${person.partnerName} is my husband`;
  } else {
    text = `${person.partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{text}</p>
    </section>
  );
};
