export const Person = ({ person }) => {
  let isMarried = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      isMarried = `${person.partnerName} is my wife`;
    } else {
      isMarried = `${person.partnerName} is my husband`;
    }
  } else {
    isMarried = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p className="Person__partner">{isMarried}</p>
    </section>
  );
};
