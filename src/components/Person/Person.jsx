import './Person.scss';

const SEX_FEMALE = 'f';
const SEX_MALE = 'm';

function getPartnerInformation(sex, partnerName) {
  if (sex === SEX_FEMALE) {
    return (
      <p className="Person__partner">{`${partnerName} is my husband`}</p>
    );
  }

  if (sex === SEX_MALE) {
    return (
      <p className="Person__partner">{`${partnerName} is my wife`}</p>
    );
  }

  return null;
}

export const Person = ({ person }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {typeof age === 'number' && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      { isMarried
        ? getPartnerInformation(sex, partnerName)
        : (<p className="Person__partner">I am not married</p>)
      }
    </section>
  );
};
