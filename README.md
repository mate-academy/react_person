# React Person

Implement the `Person` component and use it three times inside the `App` instead of static markup:

- pass the whole person as a prop `<Person person={misha} />` (**not** individual fields);
- use the markup given in the `App` rendering some parts based on given data:
  - skip `age` if it is not given;
  - if a person `isMarried` print the name of the `wife` or `husband`, depending on the `person.sex`;
  - if not — print `I am not married` message.
  Реализуйте компонент `Person` и используйте его три раза внутри `App` вместо статической разметки:

- передать человека целиком как реквизит(prop) `<Person person={misha} />` (**не** отдельные поля);
- использовать разметку, указанную в `App`, для рендеринга некоторых частей на основе заданных данных:
  - пропустить `age`, если он не указан;
  - если person `isMarried`, выведите имя `wife` или `husband`, в зависимости от `person.sex`;
  - если нет — вывести сообщение «Я не женат».

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_person/) and add it to the PR description.
