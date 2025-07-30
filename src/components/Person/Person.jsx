import './Person.scss';

export const Person = ({ person }) => {
  let personPartner = '';

  if (person.sex === 'f') {
    personPartner = 'husband';
  } else {
    personPartner = 'wife';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.isMarried && (
        <p className="Person__partner">
          {person.partnerName} is my {personPartner}
        </p>
      )}
      {!person.isMarried && <p className="Person__partner">I am not married</p>}
    </section>
  );
};
