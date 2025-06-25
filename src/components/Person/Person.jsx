export const Person = ({ person }) => {
  let messageAge = '';
  let messagePartner = '';

  if (person.hasOwnProperty('age')) {
    messageAge = <p className="Person__age">I am {person.age}</p>;
  } else {
    messageAge = null;
  }

  if (person.isMarried) {
    messagePartner = (
      <p className="Person__partner">
        {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
      </p>
    );
  } else {
    messagePartner = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {messageAge}
      {messagePartner}
    </section>
  );
};
