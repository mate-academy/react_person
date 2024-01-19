// export const Person = ({ person }) => ();
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age ? (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      ) : null}

      <p className="Person__partner">
        {isMarried === false ? (
          'I am not married'
        ) : null}

        {(isMarried === true && sex === 'm') ? (
          `${partnerName} is my wife`
        ) : null}

        {(isMarried === true && sex === 'f') ? (
          `${partnerName} is my husband`
        ) : null}
      </p>
    </section>
  );
};
