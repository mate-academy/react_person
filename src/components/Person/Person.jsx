import './Person.scss';

const FEMALE_SIGN = 'f';
const MALE_PARTNER = 'husband';
const FEMALE_PARTNER = 'wife';

const NOT_MARRIED_TEXT = 'I am not married';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerStatus = sex === FEMALE_SIGN
    ? MALE_PARTNER
    : FEMALE_PARTNER;
  const marriedStatusContent = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : NOT_MARRIED_TEXT;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        )
      }

      <p className="Person__partner">
        {marriedStatusContent}
      </p>
    </section>
  );
};
