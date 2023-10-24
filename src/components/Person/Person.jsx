import '../../App.scss';

export const Person = ({ person }) => {
  const marriedType = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (<p className="Person__age">{person.age && `I am ${person.age}`}</p>)}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${marriedType}`
          : 'I am not married'}
      </p>
    </section>
  );
};
