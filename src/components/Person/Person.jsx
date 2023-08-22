const SEX_MALE = 'm';

export const Person = ({ person }) => {
  const { name, age, partnerName, sex, isMarried } = person;

  const getPartnerInfo = () => {
    if (isMarried) {
      return `${partnerName} is my ${sex === SEX_MALE ? 'wife' : 'husband'}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {typeof age === 'number' && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {getPartnerInfo()}
      </p>
    </section>
  );
};
