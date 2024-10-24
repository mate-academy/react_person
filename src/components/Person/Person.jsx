export const Person = ({ person }) => {
  const { isMarried, partnerName, name, age, sex } = person;

  const isPersonMarried = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      {person ? (
        <>
          <h2 className="Person__name">My name is {name}</h2>
          {age && <p className="Person__age">I am {age}</p>}
          {isPersonMarried}
        </>
      ) : (
        <h1>There is no person</h1>
      )}
    </section>
  );
};
