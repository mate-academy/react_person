// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, partnerName, sex, age, isMarried } = person;

  const manOrWoman = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  const marriedOrNo = isMarried ? manOrWoman : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">{`${marriedOrNo}`}</p>
    </section>
  );
};
