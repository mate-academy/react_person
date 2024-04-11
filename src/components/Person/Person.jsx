import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const checkIsMarried = `${
    !isMarried
      ? 'I am not married'
      : `${sex === 'm' ? `${partnerName} is my wife` : `${partnerName} is my husband`}`
  }`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {!!age && <p className="Person__age">{`I am ${age}`}</p>}
      <p>{`${sex === 'm' ? 'Male' : 'Female'}`}</p>
      <p>{`${isMarried === true ? 'Married' : 'Not Married'}`}</p>
      <p className="Person__partner">{`${checkIsMarried}`}</p>
    </section>
  );
};
