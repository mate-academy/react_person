export const Person = ({ person }) => {
  const getPersonStatus = ({ isMarried, sex, partnerName }) => (
    <>
      {isMarried ? (
        <p className="Person__partner">
          {`${partnerName} is my `}
          {sex === 'm' ? 'wife' : 'husband'}
        </p>
      )
        : (
          <p className="Person__partner">
            I am not married
          </p>
        )}
    </>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age
      && <p className="Person__age">{`I am ${person.age}`}</p>
      }

      {getPersonStatus(person)}

    </section>
  );
};
