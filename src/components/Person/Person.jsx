// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  let partnerSex = '';

  if (person.sex === 'm') {
    partnerSex = 'wife';
  } else {
    partnerSex = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">
        {person.isMarried === true
          ? `${person.partnerName} is my ${partnerSex}`
          : 'I am not married'}
      </p>
    </section>
  );
};
