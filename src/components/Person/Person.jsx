import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const isMale = sex === 'm';

  const sexOfPartner = isMale
    ? 'wife'
    : 'husband';

  const myPartner = isMarried
    ? (`${partnerName} is my ${sexOfPartner}`)
    : ('I am not married');

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {myPartner}
      </p>
    </section>
  );
};
