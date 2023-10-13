export const Person = ({ person }) => {
  let partnerText = 'I am not married';

  if (person.isMarried) {
    partnerText = person.sex === 'm' ? `${person.partnerName} is my wife` : `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {partnerText}
      </p>
    </section>
  );
};
