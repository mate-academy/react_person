import './Person.scss';

export const Person = ({ person }) => {
  const isMale = person.sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )
      }
      {person.isMarried ? (
        <p className="Person__partner">
          {`${person.partnerName} is my ${isMale ? 'wife' : 'husband'}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
