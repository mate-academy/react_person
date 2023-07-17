export const Person = ({ person }) => {
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
        {person.isMarried ? (
          `${person.partnerName} is my ${getPartnerStatus(person.sex)}`
        ) : (
          'I am not married'
        )}
      </p>
    </section>
  );

  function getPartnerStatus(personSex) {
    const MALE = 'm';
    const FEMALE = 'f';

    switch (personSex) {
      case MALE:
        return 'wife';

      case FEMALE:
        return 'husband';

      default:
        return '';
    }
  }
};
