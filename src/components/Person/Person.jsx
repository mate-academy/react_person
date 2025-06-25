export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age ? <p className="Person__age">I am {person.age}</p> : null}
    <MaritalInfo person={person} />
  </section>
);

function MaritalInfo({ person }) {
  let message = '';

  if (person.isMarried === false) {
    message = 'I am not married';
  } else if (person.sex === 'm' && person.partnerName) {
    message = `${person.partnerName} is my wife`;
  } else if (person.sex === 'f' && person.partnerName) {
    message = `${person.partnerName} is my husband`;
  } else {
    message = `My partner name is not available`;
  }

  return <p className="Person__partner">{message}</p>;
}
