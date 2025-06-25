export const Person = ({
  person: { name, age, sex, partnerName, isMarried },
}) => {
  const MAN = 'm';
  const WOMAN = 'f';

  const partnerLabel = sex === MAN ? 'wife' : 'husband';
  const maritalStatus =
    isMarried && (sex === MAN || sex === WOMAN)
      ? `${partnerName} is my ${partnerLabel}`
      : 'I am not married';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">{maritalStatus}</p>
      </section>
    </div>
  );
};
