import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
    <p className="Person__age">
      I am
      {' '}
      {person.age}
    </p>
    )}
    <p className="Person__partner">
      {person.isMarried ? `${person.partnerName} is my ` : `I am not married`}
      {person.sex === 'm' && person.isMarried ? `wife` : ''}
      {person.sex === 'f' && person.isMarried ? 'husband' : ''}
    </p>
  </section>
);
