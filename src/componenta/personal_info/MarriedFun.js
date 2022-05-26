export function MarriedOrNot(sex, status, partnerName) {
  if (status && sex === 'm') {
    return `My wife's name is ${partnerName}`;
  }

  if (status && sex === 'f') {
    return `My husbent's name is ${partnerName}`;
  }

  return 'I am not married';
}
// 
