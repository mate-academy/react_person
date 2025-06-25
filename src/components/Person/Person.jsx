export const Person = ({ person }) => {
  let message = '';

  if (!person.isMarried) {
    message += 'I am not married';
  } else if (person.sex === 'm') {
    message += `${person.partnerName} is my wife`;
  } else {
    message += `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      { person.age > 0
       && (
       <p className="Person__age">
         {`I am ${person.age}`}
       </p>
       )
          }
      <p className="Person__partner">
        { message }
      </p>
    </section>
  );
};
