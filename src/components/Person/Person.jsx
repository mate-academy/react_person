export const Person = ({ person }) => {
  let partnerString = 'I am not married';

  if (person.isMarried) {
    partnerString = person.sex === 'f'
  ? `${person.partnerName} is my husband`
  : `${person.partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && 
      <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerString}</p>
    </section>
  )
};
