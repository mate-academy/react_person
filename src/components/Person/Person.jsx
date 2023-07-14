export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  const marriedOrNo = () => {
    if (isMarried) {
      return `${partnerName} is my ${partnerSex}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{marriedOrNo()}</p>
    </section>
  );
};
