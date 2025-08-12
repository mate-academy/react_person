const Person = ({ person }) => {
  let partnerInfo;

  if (person.isMarried) {
    const partnerLabel = person.sex === 'm'
      ? 'wife'
      : 'husband';

    partnerInfo = `${person.partnerName} is my ${partnerLabel}`;
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && (
        <p className="Person__age">I am {person.age}</p>
      )}

      <p className="Person__partner">
        {partnerInfo}
      </p>
    </section>
  );
};

export default Person;
