export function Person({ person }) {
  let message;
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  if (person.isMarried) {
    message = `${person.partnerName} is my ${partner}`;
  } else {
    message = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>
      
        {person.age ? (
          <p className="Person__age">
            I am
            {' '}
            {person.age}
          </p>
          ) : ''}
      <p className="Person__partner">
        {message}
      </p>
    </section>
  );
}
