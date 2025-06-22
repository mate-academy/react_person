export const Person = ({ person }) => {
  let marriage = '';
  
  if (!person.isMarried) {
    marriage = 'I am not married';
  } else if (person.sex === 'm') {
    marriage = `${person.partnerName} is my wife`;
  } else if (person.sex === 'f') {
    marriage = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      { person.age ? 
        <p className="Person__age">I am {person.age}</p> :
      '' }
      
      <p className="Person__partner">{marriage}</p>
    </section>
  )
};
