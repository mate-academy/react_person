export const Person = ({ person }) => {
  let married = '';

  if (person.isMarried && person.sex === 'f') {
    married = (
      <p className="Person__partner">{person.partnerName} is my husband</p>
    );
  } else if (person.isMarried && person.sex === 'm') {
    married = (
      <p className="Person__partner">{person.partnerName} is my wife</p>
    );
  } else {
    married = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age ? <p className="Person__age">I am {person.age}</p> : ''}
      {married}
    </section>
  );
};
