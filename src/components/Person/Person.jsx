import './Person.scss';

export const Person = ({ person }) => {
  const partnerText = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>
        <p className="Person__age">
          {person.age
            ? `I am ${person.age}`
            : null
          }
        </p>
        <p className="Person__partner">
          {person.isMarried
            ? `${person.partnerName} is my ${partnerText}`
            : `I'm not married`
          }
        </p>
      </section>
    </div>
  );
};
