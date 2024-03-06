export const Person = ({ person }) => {
  let contentPartner;
  let contentAge;

  if ('age' in person) {
    contentAge = <p className="Person__age">I am {person.age}</p>;
  } else {
    contentAge = null;
  }

  if (person.isMarried === false) {
    contentPartner = <p className="Person__partner">I am not married</p>;
  } else if (person.isMarried === true && person.sex === 'm') {
    contentPartner = (
      <p className="Person__partner">{person.partnerName} is my wife</p>
    );
  } else if (person.isMarried === true && person.sex === 'f') {
    contentPartner = (
      <p className="Person__partner">{person.partnerName} is my husband</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {contentAge}
      {contentPartner}
    </section>
  );
};
