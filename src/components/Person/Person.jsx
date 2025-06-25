let wifeHusb;

export const Person = ({ person }) => {
  if (person.sex === 'm') {
    wifeHusb = 'wife';
  } else {
    wifeHusb = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined ? (
        <p className="Person__age">I am {person.age}</p>
      ) : null}
      <p className="Person__partner">
        {person.isMarried === true
          ? `${person.partnerName} is my ${wifeHusb}`
          : 'I am not married'}
      </p>
    </section>
  );
};

export default Person;
