export const Person = ({ person }) => {
  let partner = '';

  if (!person.isMarried) {
    partner = 'I am not married';
  } else if (person.sex === 'm') {
    partner = `${person.partnerName} is my wife`;
  } else {
    partner = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {`${partner}`}
      </p>
    </section>
  );
}
