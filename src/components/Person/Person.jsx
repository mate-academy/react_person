import './Person.scss';

const SEX_MALE = 'm';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const messageAboutPartner = sex === SEX_MALE
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  const messageAboutFreedom = 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {Boolean(age) && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {isMarried
          ? messageAboutPartner
          : messageAboutFreedom}
      </p>
    </section>
  );
};
