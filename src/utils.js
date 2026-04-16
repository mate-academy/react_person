import { GENDER_FEMALE_SYMBOL, GENDER_MALE_SYMBOL } from './constants';

export function getPartnerText(person) {
  if (person.isMarried && person.sex === GENDER_MALE_SYMBOL) {
    return `${person.partnerName} is my wife`;
  }

  if (person.isMarried && person.sex === GENDER_FEMALE_SYMBOL) {
    return `${person.partnerName} is my husband`;
  }

  if (!person.isMarried) {
    return 'I am not married';
  }

  return null;
}
