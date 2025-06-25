import './Person.scss';

export const Person = ({ person }) => {
  const partnerInfo = person.sex === 'f'
    ? 'husband'
    : 'wife';
  const marriageStatusInfo = person.isMarried
    ? `${person.partnerName} is my ${partnerInfo}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">
        {marriageStatusInfo}
      </p>
    </section>
  );
};
