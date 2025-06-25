import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const kindOfSex = sex === 'm' ? 'wife' : 'husband';

  const isPartner = isMarried ? (
    <p className="Person__partner">{`${partnerName} is my ${kindOfSex}`}</p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isPartner}
    </section>
  );
};
