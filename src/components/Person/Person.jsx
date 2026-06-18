import cn from 'classnames';

export const Person = ({ person }) => (
  <div>
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className={cn({ Person__age: person.age })}>
        {person.age && `I am ${person.age}`}
      </p>
      <p className="Person__partner">
        {person.isMarried &&
          person.sex === 'm' &&
          `${person.partnerName} is my wife`}
        {person.isMarried &&
          person.sex === 'f' &&
          `${person.partnerName} is my husband`}
        {!person.isMarried && `I am not married`}
      </p>
    </section>
  </div>
);
