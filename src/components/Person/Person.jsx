export const Person = ({ person }) => {
  let marriedTo;

  if (person.isMarried) {
    if (person.sex === 'f') {
      marriedTo = (<p className="Person__partner">{person.partnerName} is my husband</p>)
    } else {
      marriedTo = (<p className="Person__partner">{person.partnerName} is my wife</p>)
    }
  } else {
    marriedTo = <p className="Person__partner">I am not married</p>
  }

  return <>
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age &&  <p className="Person__age">I am {person.age}</p>}
      {marriedTo}
    </section>
  </>
};
