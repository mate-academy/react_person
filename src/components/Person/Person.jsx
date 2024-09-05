export const Person = ({ person }) => {
  const { name, age, sex, married, partner } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {married ? (
        <p className="Person__partner">
          My {sex === 'male' ? 'wife' : 'husband'}'s name is {partner}.
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};
