export function getPartnerInfo(isMarried, sex, partnerName) {
  let partnerType;
  let partner;

  if (isMarried) {
    partnerType = sex === 'm' ? 'wife' : 'husband';
    partner = `${partnerName} is my ${partnerType}`;
  } else {
    partner = 'I am not married';
  }

  return partner;
}
