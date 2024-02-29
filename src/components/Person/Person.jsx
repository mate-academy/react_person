import { MerriageInfo } from '../MerriageInfo/MerriageInfo';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    {person.isMarried ? (
      <MerriageInfo
        message={`${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
      />
    ) : (
      <MerriageInfo />
    )}
  </section>
);
