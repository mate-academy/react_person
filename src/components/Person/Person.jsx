export const Person = ({ person }) => (
  <section className="person">
    <h2 className="person__name">
      My name is
      <span className="person__space">
        {person.name}
      </span>
    </h2>
    {person.age && (
    <p className="person__age">
      I am
      <span className="person__space">
        {person.age}
      </span>
    </p>
    )}
    {person.isMarried ? (
      <p className="person__partner">
        {person.partnerName}
        <span className="person__space">
          is my
        </span>
        <span className="person__space">
          {person.sex === 'm' ? 'wife' : 'husband'}
        </span>
      </p>
    ) : (
      <p className="person__partner">I am not married</p>
    )}
  </section>
);
