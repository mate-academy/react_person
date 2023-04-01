# React person

Implement a `Person` component rendering a person details using the given markup
and use it 3 times inside the `App` instead of static markup.

- pass the whole person as a prop `<Person person={misha} />` (**not** individual fields);
- omit `age` if it is not given;
- if a man is married use `wife` for a partner and `husband` if a woman is married;
- if a person is not married - print `I am not married` message.

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_person/) and add it to the PR description.

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerSex}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};