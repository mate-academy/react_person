export const Age = ({ age }) => {
  if (!age) {
    return null;
  }

  return (
    <p className="Person__age">
      {`I am ${age}`}
    </p>
  );
};
