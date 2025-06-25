export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__age">
        {Object.prototype.hasOwnProperty.call(person, 'age')
          ? `I am ${person.age} years old`
          : ''}
      </p>
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'}
      </p>
    </section>
  );
};
