export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p className="Person__age">
      I am {person.age && <span>{person.age}</span>}
    </p>
    <p className="Person__partner">
      {person.isMarried && (
        <span>
          {person.partnerName} is my {person.sex === 'm' && 'wife'}{' '}
          {person.sex === 'f' && 'husband'}
        </span>
      )}{' '}
      {!person.isMarried && <span>I am not married</span>}
    </p>
  </section>
);
