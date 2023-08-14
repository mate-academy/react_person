export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;
  const personPartner = `${partnerName}`;
  const personSex = `${sex === 'm' ? 'wife' : 'husband'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {`${!isMarried
          ? 'I am not married'
          : personPartner} is my ${personSex}`}
      </p>
    </section>
  );
};
