const whoIsPartner = (sex, isMarried, partnerName) => {
  if (isMarried && sex === 'm') {
    return `${partnerName} is my wife`;
  }

  if (isMarried && sex === 'f') {
    return `${partnerName} is my husband`;
  }

  return 'I am not married';
};

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {
        age
         && (
           <p className="Person__age">
             {`I am ${age}`}
           </p>
         )
      }
      <p className="Person__partner">
        {whoIsPartner(sex, isMarried, partnerName)}
      </p>
    </section>
  );
};
