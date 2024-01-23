export const Person = ({ person }) => {
  let messege = '';

  if (!person.isMarried) {
    messege = `I am not married`;
  } else {
    messege = `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age === undefined
        ? ''
        : <p className="Person__age">{`I am ${person.age}`}</p>
      }
      <p className="Person__partner">{messege}</p>
    </section>
  );
};
