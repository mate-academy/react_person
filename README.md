# React person

Implement a `Person` component rendering a person details using the given markup
and use it 3 times inside the `App` instead of static markup.

- pass the whole person as a prop `<Person person={misha} />` (**not** individual fields);
- omit `age` if it is not given;
- if a man is married use `wife` for a partner and `husband` if a woman is married;
- if a person is not marriend - print `I am not married` message;
- keep the same classNames in `Person.jsx` as in `App.jsx` (`Person`, `Person__name`, `Person__age`, `Person__partner`).

- [DEMO LINK](https://antonmolchanov18.github.io/react_person/)
