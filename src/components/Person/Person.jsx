export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__age">
        {person.age && <span>I am {person.age}</span>}
      </p>
      <p className="Person__partner">
        {person.partnerName && person.isMarried ? (
          <span>
            {person.partnerName} is my
            {person.sex === 'm' ? ' wife' : ' husband'}
          </span>
        ) : (
          <span>I am not married</span>
        )}
      </p>
    </section>
  );
};
