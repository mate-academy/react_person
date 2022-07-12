# React person
Implement a `Person` component and use it 3 times inside the `App` instead of static markup
- Pass the whole person as a prop `<Person person={misha} />` (NOT individual fields)
- Use the markup given in the `App` rendering some parts based on given data 
  - omit `age` if it is not given
  - if a person `isMarried` print the name of the `wife` or `husband` depending on `person.sex`
  - if not - print `I am not married` message

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Open one more terminal and run tests with `npm test` to ensure your solutions is correct
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_person/) and add it to PR description
