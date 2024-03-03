export const Person = ({ person }) => {
  return (
    <div>
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        {person.age !== undefined && (
          <p className="Person__age">I am {person.age}</p>
        )}
        <p className="Person__partner">
          {person.isMarried && person.sex === 'm'
            ? `${person.partnerName} is my wife`
            : person.isMarried && person.sex === 'f'
              ? `${person.partnerName} is my husband`
              : !person.isMarried
                ? 'I am not married'
                : null}
        </p>
      </section>
    </div>
  );
};
