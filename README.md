# React person

Implement a `Person` component rendering a person details using the given markup
and use it 3 times inside the `App` instead of static markup.

- pass the whole person as a prop `<Person person={misha} />` (**not** individual fields);
- omit `age` if it is not given;
- if a man is married use `wife` for a partner and `husband` if a woman is married;
- if a person is not marriend - print `I am not married` message;
- keep the same classNames in `Person.jsx` as in `App.jsx` (`Person`, `Person__name`, `Person__age`, `Person__partner`).

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://IrynaZahorodnia.github.io/react_person/) and add it to the PR description.
