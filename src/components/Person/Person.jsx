// export const Person = ({ person }) => ();
import './Person.scss';

export const Person = ({ person }) => {
  const MAN = 'm';

  const getStatus = sex => (sex === MAN
    ? 'wife'
    : 'husband');

  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age > 0
        && (
          <p className="Person__age">{`I am ${age}`}</p>
        )
      }
      {isMarried
        ? (
          <p className="Person__partner">{`${partnerName} is my ${getStatus(sex)}`}</p>
        ) : (
          <p className="Person__partner"> I am not married</p>
        )

      }
    </section>
  );
};
