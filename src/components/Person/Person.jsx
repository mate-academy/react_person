export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <AgeData age={person.age} />
      <MariageData person={person} />
    </section>
  );
};

const AgeData = ({ age }) => {
  if (!age) {
    return null;
  }

  return <p className="Person__age">{`I am ${age}`}</p>;
};

const MariageData = ({ person: { sex, isMarried, partnerName } }) => {
  if (!isMarried) {
    return <p className="Person__partner">I am not married</p>;
  }

  const partnerStatus = sex === 'm' ?
    'wife' :
    'husband';

  return (
    <p className="Person__partner">{`${partnerName} is my ${partnerStatus}`}</p>
  );
};
