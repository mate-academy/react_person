# React person

Implement a `Person` component rendering a person's details using the given markup
and use it 3 times inside the `App` instead of static markup.

- Pass the entire person object as a prop using `<Person person={misha} />` (**do not** use individual fields);
- Omit the `age` if it is not present in the person object;
- If a man is married, refer to his partner as `wife`; if a woman is married, refer to her partner as `husband`;
- If a person is not married, display the message "I am not married";
- Ensure that the class names in `Person.jsx` match those used in `App.jsx` (`Person`, `Person__name`, `Person__age`, `Person__partner`).

**Important:** The constants `misha`, `olya`, and `alex` are valid and should not be modified. Property `age` is optional.

## Instructions
- Install Prettier Extension and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_person/) and add it to the PR description.
