import './Person.scss';

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{person.name}</h2>
      {person.age && <p className="Person__age">{person.age}</p>}
      <p className="Person__partner">
        {person.isMarried ? person.partnerName : 'I am not married'}
      </p>
    </section>
  );
};
