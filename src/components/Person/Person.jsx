const genderTitle = {
  m: 'wife',
  f: 'husband',
};

export const Person = ({ person }) => {
  const { name, age, partnerName, isMarried, sex } = person;
  const genderLine = `${partnerName} is my ${genderTitle[sex]}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {!!age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried ? genderLine : <span>I am not married</span>}
      </p>
    </section>
  );
};
