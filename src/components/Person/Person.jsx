export const Person = ({ person }) => {
  const partner = person.sex === 'f' ? (
    `${person.partnerName} is my husband`
  ) : (
    `${person.partnerName} is my wife`
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{`${person.age ? ` I am ${person.age}` : ``}`}</p>
      <p className="Person__partner">

        {person.isMarried ? partner : 'I am not married'}
      </p>
    </section>
  );
};
