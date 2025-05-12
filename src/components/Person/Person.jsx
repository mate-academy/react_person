import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isFemale = sex === 'f';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried ? (
          <>
            {partnerName} is my <span>{isFemale ? 'husband' : 'wife'}</span>
          </>
        ) : (
          <span>I am not married</span>
        )}
      </p>
    </section>
  );
};
