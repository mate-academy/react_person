// export const Person = ({ person }) => ();
export const Person = ({
  person: { name, age, isMarried, partnerName, sex },
}) => {
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  const ageElement =
    age !== undefined ? <p className="Person__age">I am {age}</p> : null;

  const partnerElement = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {partnerLabel}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageElement}
      {partnerElement}
    </section>
  );
};
