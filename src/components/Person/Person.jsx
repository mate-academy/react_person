export const Person = ({ person }) => (
    <section className="Person">
      <h2 className="Person__name">My name is { person.name }</h2>
      {person.age && (
        <div className="Person__age">
            <span>I am {person.age}</span>
        </div>
        )}
      <div className="Person__partner">
        {person.isMarried ? (
            <span>
            {person.partnerName} is my {person.sex === 'm' ? 'wife' : 'husband'}
            </span>
        ) : (
            <span>I am not married</span>
        )}
        </div>
    </section>

);
