// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  let textAboutPartner;

  if (person.isMarried) {
    if (person.sex === 'm') {
      textAboutPartner = `${person.partnerName} is my wife`;
    } else {
      textAboutPartner = `${person.partnerName} is my husband`;
    }
  } else {
    textAboutPartner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {
        person.age && <p className="Person__age">{`I am ${person.age}`}</p>
      }
      <p className="Person__partner">{textAboutPartner}</p>
    </section>
  );
};
