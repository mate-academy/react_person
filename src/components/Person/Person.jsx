import './Person.scss';
// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const showAge = typeof person.age !== 'undefined' && person.age !== null;

  const getPartnerText = () => {
    if (!person.isMarried) {
      return 'I am not married';
    }

    // eslint-disable-next-line prettier/prettier
    const partnerTitle = person.sex === 'm'
      ? 'wife'
      : 'husband';

    return `${person.partnerName} is my ${partnerTitle}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {showAge && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};
