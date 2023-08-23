export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let whoIsPartner = '';

  if (isMarried && sex === 'm') {
    whoIsPartner = `${partnerName} is my wife`;
  } else if (isMarried && sex === 'f') {
    whoIsPartner = `${partnerName} is my husband`;
  } else {
    whoIsPartner = 'I am not married';
  }

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
        {whoIsPartner}
      </p>
    </section>
  );
};
