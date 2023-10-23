import './Person.scss';

function getMarriageStatus(person) {
  return person.sex === 'm'
    ? `${person.partnerName} is my wife`
    : `${person.partnerName} is my husband`;
}

export const Person = ({ person }) => {
  const { name, age, isMarried } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>

      {age && (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? getMarriageStatus(person)
          : 'I am not married'
        }
      </p>
    </section>
  );
};
