import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        I am
        {' '}
        {person.age}
      </p>
    )}
    <p className="Person__partner">
      {person.isMarried === true && person.sex === 'f'
        ? `${person.partnerName} is my husband`
        : null
      }
      {person.isMarried === true && person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : null
      }
      {person.isMarried === false
        && `I am not married`
      }
    </p>
  </section>
);
