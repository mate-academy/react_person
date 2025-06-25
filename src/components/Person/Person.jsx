export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const MALE = 'm';

  const renderAge = () => {
    return age ? <p className="Person__age">I am {age}</p> : null;
  };

  const renderPartner = () => {
    if (isMarried) {
      const partnerLabel = sex === MALE ? 'wife' : 'husband';

      return (
        <p className="Person__partner">
          {partnerName} is my {partnerLabel}
        </p>
      );
    }

    return <p className="Person__partner">I am not married</p>;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {renderAge()}
      {renderPartner()}
    </section>
  );
};
