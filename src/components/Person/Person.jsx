import './Person.scss';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerTitle = getPartnerTitle(sex);

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerTitle}`
          : 'I am not married'}
      </p>
    </section>
  );
}

function getPartnerTitle(sex) {
  switch (sex) {
    case 'm':
      return 'wife';
    case 'f':
      return 'husband';
    default:
      throw new Error();
  }
}
