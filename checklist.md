1. [CODE STYLE] - Use destructuring for getting access to values of `props` object

BAD EXAMPLE:
```jsx
export const Component = props => (
  <>
    <h1>{props.firstProperty}</h1>
    <span>{props.secondProperty}</span>
    <p>{props.thirdProperty}</p>
  </>
);
```

GOOD EXAMPLE:
```jsx
export const Component = ({
 firstProperty,
 secondProperty,
 thirdProperty
}) => (
  <>
    <h1>{firstProperty}</h1>
    <span>{secondPropery}</span>
    <p>{thirdProperty}</p>
  </>
);
```

ALSO GOOD EXAMPLE: 

```jsx
export const Component = (props) => {
 const {
  firstProperty,
  secondProperty,
  thirdProperty
} = props; 

 return (
  <>
    <h1>{firstProperty}</h1>
    <span>{secondPropery}</span>
    <p>{thirdProperty}</p>
  </>
 )
};
```
2. [CODE STYLE] - Readabily is everything. Format ternary operator operands correctly - move each operand to the separate line:

BAD EXAMPLE:
```jsx
const value = condition ? firstValue : secondValue;
```

GOOD EXAMPLE:
```jsx
const value = condition 
  ? firstValue 
  : secondValue;
```


3. [CODE STYLE] - Avoid putting several cases to conditional rendering. Create separate variable for the condition.

BAD EXAMPLE:
```jsx
{listEnabled && list.length && smthElse > 0 
  ? <ComponentOne />
  : <ComponentTwo />}
```

