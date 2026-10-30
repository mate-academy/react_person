// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const isFemale = sex === 'f';
  const partnerStatus = isFemale ? 'husband' : 'wife';
  const hasAge = age !== undefined;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {hasAge
      ? <p className="Person__age">{`I am ${age}`}</p>
      : ''}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerStatus}`
          : 'I am not married'}
      </p>
    </section>
  );
};
