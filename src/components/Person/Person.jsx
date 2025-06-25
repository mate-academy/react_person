import './Person.scss';

const partherInfo = details => {
  const parnerSex = details.sex === 'f' ? 'husband' : 'wife';

  return !details.isMarried
    ? 'I am not married'
    : `${details.partnerName} is my ${parnerSex}`;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">{partherInfo(person)}</p>
  </section>
);
