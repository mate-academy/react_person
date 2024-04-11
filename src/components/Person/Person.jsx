export const Person = ({ person }) => {
  const getPartnerTitle = (sex, isMarried) => {
    if (!isMarried) {
      return '';
    }

    return sex === 'm' ? 'wife' : 'husband';
  };

  const partnerTitle = getPartnerTitle(person.sex, person.isMarried);

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partnerTitle}`
          : 'I am not married'}
      </p>
    </section>
  );
};
