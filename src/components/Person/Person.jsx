// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  let partnerType = 'not married';

  if (person.isMarried) {
    partnerType = person.sex === 'm' ? 'wife' : 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age"> I am {person.age}</p>}
      {person.isMarried && (
        <p className="Person__partner">
          {person.partnerName} is my {partnerType}
        </p>
      )}
    </section>
  );
};
