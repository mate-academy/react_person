export function Person({ person: { name, age, sex, isMarried, partnerName } }) {
  let typeOfPartner = 'wife';

  if (sex === 'f') {
    typeOfPartner = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {name}
      </h2>
      {age ? (
        <p className="Person__age">
          I am
          {age}
        </p>
      ) : null}
      {isMarried
        ? (
          <p className="Person__partner">
            {partnerName}
            {' '}
            is my
            {' '}
            {typeOfPartner}
          </p>
        )
        : <p className="Person__partner">I am not married</p>}
    </section>
  );
}
