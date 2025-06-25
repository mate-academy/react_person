import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const SPOUSE = sex === 'f' ? 'husband' : 'wife';
  const NOT_MARRIED_MESSAGE = 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : null}
      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${SPOUSE}` : NOT_MARRIED_MESSAGE}
      </p>
    </section>
  );
};
