import { getPartnerInfo } from './helperFunctions';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = getPartnerInfo(isMarried, sex, partnerName);

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
