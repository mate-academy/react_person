export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age ? <p className="Person__age">I am {person.age}</p> : ''}
    {person.sex === 'm' && person.isMarried === true ? (
      <p className="Person__patner">{person.partnerName} is my wife</p>
    ) : (
      ''
    )}
    {person.sex === 'f' && person.isMarried === true ? (
      <p className="Person__patner">{person.partnerName} is my husband</p>
    ) : (
      ''
    )}
    {person.isMarried === false ? (
      <p className="Person__patner">I am not married</p>
    ) : (
      ''
    )}
  </section>
);
