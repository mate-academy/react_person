/* eslint-disable react/jsx-one-expression-per-line */
export const Person = ({ person }) => {
  const spouse = person.sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age
        ? <p className="Person__age">I am {person.age}</p>
        : null
        }
      {person.isMarried
        ? (
          <p className="Person__partner">
            {`${person.partnerName} is my ${spouse}`}
          </p>
        )
        : <p className="Person__partner">I am not married</p>
        }
    </section>
  );
};
