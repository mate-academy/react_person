import './Person.scss';

const SEX = {
  female: 'f',
  male: 'm',
};
const DEFAULT_PERSON_PARTNER_TEXT = 'I am not married';

const getPersonPartnerText = ({ isMarried, sex, partnerName }) => {
  return isMarried ? `${partnerName} is my ${sex === SEX.female ? 'husband' : 'wife'}` : DEFAULT_PERSON_PARTNER_TEXT;
};

export const Person = ({ person }) => {
  const { name, age } = person;
  const personPartnerText = getPersonPartnerText(person);

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{personPartnerText}</p>
    </section>
  );
};
