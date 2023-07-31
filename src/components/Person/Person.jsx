export const Person = ({ person }) => (
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
      {(() => {
        const genderCheck
        = person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`;

        return person.isMarried ? genderCheck : 'I am not married';
      })()}
    </p>
  </section>
);
