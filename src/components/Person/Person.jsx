export const Person = prop => (
  <section className="Person">
    <h2 className="Person__name">My name is {prop.name}</h2>
    {prop.age ? <p className="Person__age">I am {prop.age}</p> : ''}
    <p className="Person__partner">{`${
      prop.isMarried
        ? `${prop.partnerName} is my ${prop.sex === 'm' ? `wife` : `husband`}`
        : 'I am not married'
    }`}</p>
  </section>
);
