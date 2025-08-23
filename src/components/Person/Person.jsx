export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried, sex } = person;
  const hasAge = age != null;

  const status = sex === 'm' ? 'wife' : 'husband';

  const partnerInfo = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {status}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {hasAge && <p className="Person__age">{`I am ${age}`}</p>}
      {partnerInfo}
    </section>
  );
};
