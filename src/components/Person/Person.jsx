export function Person({ person }) {
  let marriedContent;

  if (person.isMarried && person.sex === 'm') {
    marriedContent = (
      <p className="Person__partner">
        {`${person.partnerName} `}
        is my wife
      </p>
    );
  } else if (person.isMarried && person.sex === 'f') {
    marriedContent = (
      <p className="Person__partner">
        {`${person.partnerName} `}
        is my husband
      </p>
    );
  } else {
    marriedContent = (
      <p className="Person__partner">I am not married</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {` ${person.name}`}
      </h2>
      {person.age ? (
        <p className="Person__age">
          I am
          {` ${person.age}`}
        </p>
      ) : null}
      {marriedContent}
    </section>
  );
}
