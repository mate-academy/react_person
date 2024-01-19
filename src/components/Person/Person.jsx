import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const civilStatus = sex === 'm' ? 'wife' : 'husband';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        <p className="Person__age">
          {age && (`I am ${age}`)}

        </p>
        <p className="Person__partner">
          {isMarried ? (
            `${partnerName} is my ${civilStatus}`
          ) : (
            'I am not married'
          )}

        </p>
      </section>
      ;
    </>
  );
};
