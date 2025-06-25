export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const chooseFemale = sex === 'f' ? `husband` : `wife`;
  let maritalStatus = <p className="Person__partner">I am not married</p>;

  if (isMarried) {
    maritalStatus = (
      <p className="Person__partner">
        {partnerName} is my {chooseFemale}
      </p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {maritalStatus}
    </section>
  );
};
