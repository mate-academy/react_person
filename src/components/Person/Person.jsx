import './Person.scss';

export const Person = ({ person }) => {
  const { age, isMarried, partnerName } = person;
  const maritalStatus = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${maritalStatus}` : 'I am not married'}
      </p>
    </section>
  );
};
