export const Counter = ({ onIncrement, onDecrement, onDelete, ...props }) => {
  const { id, value, name } = props;

  const getBadgeClassName = () => {
    return `badge m-2 ${value === 0 ? "bg-warning" : "bg-primary"}`;
  };

  const getButtonClassName = (type) => {
    return `btn m-2 ${value === 0 ? "bg-secondary" : "bg-primary"}`;
  };

  return (
    <>
      <span className="fs-4 fw-bold">{name}</span>
      <span className={getBadgeClassName()}>
        {value === 0 ? "empty" : value}
      </span>
      <button
        type="button"
        className={getButtonClassName()}
        onClick={() => onIncrement(id)}
      >
        +
      </button>
      <button
        type="button"
        className={getButtonClassName()}
        onClick={() => onDecrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        type="button"
        onClick={() => onDelete(id)}
      >
        delete
      </button>
    </>
  );
};
