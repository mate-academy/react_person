import classNames from 'classnames';

export const Person = ({ person }) => {
  const marryGender = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {'age' in person && <p className="Person__age">{`I am ${person.age}`}</p>}
      {person.isMarried ? (
        <p
          className={classNames('Person__partner', {
            'Person__partner--married': person.isMarried,
          })}
        >
          {`${person.partnerName} is my ${marryGender}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
