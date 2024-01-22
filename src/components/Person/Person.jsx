import './Person.scss';

export const Person = ({ person }) => {
  const personPartnerType = person.sex === 'm' ? 'wife' : 'husband';
  const personPartner = person.isMarried
    ? `${person.partnerName} is my ${personPartnerType}`
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

      {!person.isMarried
        ? (<p className="Person__partner">I am not married</p>)
        : (
          <p className="Person__partner">
            {personPartner}
          </p>
        )}
    </section>
  );
};
