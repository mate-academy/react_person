import './Person.scss';

function getMarriageStatus(person) {
  return person.sex === 'm'
    ? `${person.partnerName} is my wife`
    : `${person.partnerName} is my husband`;
}

export const Person = ({ person }) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        {`My name is `}
        {person.name}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am `}
          {person.age}
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? getMarriageStatus(person)
          : 'I am not married'
        }
      </p>
    </section>
  </>
);
