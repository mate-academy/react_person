import cn from 'classnames';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    <p className={cn(person.age && 'Person__age')}>
      {`I am ${person.age}`}
    </p>
    <p className="Person__partner">
      {person.isMarried
        ? `${person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`}`
        : `I am not married`
      }
    </p>
  </section>
);
