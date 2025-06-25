export const Person = ({ person }) => {
  const hasAge = person.age;
  const { isMarried } = person;
  let marriedAnswer;

  if ((isMarried) && (person.sex === 'm')) {
    marriedAnswer = <p className="Person__partner">{`${person.partnerName} is my wife`}</p>;
  } else if ((isMarried) && (person.sex === 'f')) {
    marriedAnswer = <p className="Person__partner">{`${person.partnerName} is my husband`}</p>;
  } else {
    marriedAnswer = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {hasAge && <p className="Person__age">{`I am ${person.age}`}</p>}
      {marriedAnswer}
    </section>
  );
};
