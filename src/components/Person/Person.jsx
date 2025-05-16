const SEX = {
  female: 'f',
  male: 'm',
};

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personPartnerText = isMarried
    ? `${partnerName} is my ${sex === SEX.female ? 'husband' : 'wife'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{personPartnerText}</p>
    </section>
  );
};
