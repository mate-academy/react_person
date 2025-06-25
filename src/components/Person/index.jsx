import { PersonName } from './PersonName';
import { PersonAge } from './PersonAge';
import { PersonStatus } from './PersonStatus';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <PersonName>{name}</PersonName>
    <PersonAge age={age} />
    <PersonStatus sex={sex} isMarried={isMarried} partnerName={partnerName} />
  </section>
);
