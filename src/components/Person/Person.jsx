import './Person.scss';

export const Person = ({ person }) => {
  let line = '';
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  if (!person.isMarried) {
    line = 'I am not married';
  } else {
    line = `${person.partnerName} is my ${partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {!!person.age
        && <p className="Person__age">{`I am ${person.age}`}</p>
      }
      <p className="Person__partner">{line}</p>
    </section>
  );
};
