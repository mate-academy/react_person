import './Person.css';

export const Person = ({ person }) => {
  const { name, age = 0, isMarried = false, sex, partnerName = null } = person;
  const spouseType = sex === 'm' ? 'wife' : 'husband';
  const married = (
    <p className="Person__partner">
      {partnerName} is my {spouseType}
    </p>
  );
  const notMarried = <p className="Person__partner">I am not married</p>;
  const marriageStatus = isMarried && partnerName ? married : notMarried;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {marriageStatus}
    </section>
  );
};
