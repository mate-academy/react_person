// export const Person = ({ person }) => ();
import './Person.scss';

const MAN = 'm';
const WIFE = 'wife';
const HUSBANT = 'husband';
const getStatus = sex => (sex === MAN
  ? WIFE
  : HUSBANT);

export const Person = ({ person }) => {
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

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${getStatus(sex)}`
          : 'I am not married'}
      </p>
    </section>
  );
};
