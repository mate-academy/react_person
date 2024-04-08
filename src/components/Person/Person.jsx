import './Person.scss';

export const Person = ({ person }) => {
  const { name, sex, isMarried, partnerName, age } = person;
  const personPartnerType = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {personPartnerType}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
