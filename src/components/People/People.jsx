import { Person } from './Person';

export function People({ people }) {
  return people.map(person => <Person person={person} />);
}
