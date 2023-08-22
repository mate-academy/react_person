import './Person.scss';

const SEX_FEMALE = 'f';

const getPartnerStatus = sex => (sex === SEX_FEMALE ? 'husband' : 'wife');

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

      {!!age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      { isMarried
        ? (<p className="Person__partner">{`${partnerName} is my ${getPartnerStatus(sex)}`}</p>)
        : (<p className="Person__partner">I am not married</p>)
      }
    </section>
  );
};
