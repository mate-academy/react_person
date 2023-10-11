import './Person.scss';

// eslint-disable-next-line
export const Person = ({ person }) => {
  const myName = `My name is ${person.name}`;
  const myAge = `I am ${person.age}`;
  const myPartner = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {myName}
      </h2>

      {person.age ? (
        <p className="Person__age">
          {myAge}
        </p>
      ) : (
        null
      )}

      {person.isMarried === true ? (
        <p className="Person__partner">
          {`${person.partnerName} is my ${myPartner}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
};
