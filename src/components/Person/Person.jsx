const PERSON_FEMALE_SEX = 'f';

export const Person = ({ person }) => {
  let partnerMessage = '';

  if (!person.isMarried) {
    partnerMessage = 'I am not married';
  } else {
    const partnerRole = person.sex === PERSON_FEMALE_SEX ? 'husband' : 'wife';

    partnerMessage = `${person.partnerName} is my ${partnerRole}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age !== undefined && (
        <p className="Person__age">
            {`I am ${person.age}`}
        </p>
      )}
      <p className="Person__partner">
        {partnerMessage}
      </p>
    </section>
  );
};
