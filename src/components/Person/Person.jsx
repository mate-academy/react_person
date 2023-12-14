export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  const isWife = () => {
    if (sex === 'm') {
      return 'is my wife';
    }

    return 'is my husband';
  };

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">
          {isMarried ? `${partnerName} ${isWife(sex)}` : 'I am not married'}
        </p>
      </section>
    </div>
  );
};
