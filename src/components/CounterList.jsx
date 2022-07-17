import { useState } from "react";
import { Counter } from "./Counter";
import { counter } from "../data/counter";

const initialState = counter;

export const CounterList = () => {
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  // const handleIncrementCount = (id) => {
  //   const targetIdx = counters.findIndex((counter) => counter.id === id);
  //   const newCounters = [...counters];
  //   newCounters[targetIdx].value += 1;
  //   setCounters(newCounters);
  // };
  const handleIncrementCount = (id) => {
    const newCounters = counters.map((count) =>
      count.id === id ? { ...count, value: count.value + 1 } : count
    );
    setCounters(newCounters);
  };

  const handleDecrementCount = (id) => {
    const targetIdx = counters.findIndex((counter) => counter.id === id);
    const newCounters = [...counters];
    newCounters[targetIdx].value -= 1;
    setCounters(newCounters);
  };

  return (
    <ul>
      {counters.map((el) => (
        <li key={el.id}>
          <Counter
            onDelete={handleDelete}
            onIncrement={handleIncrementCount}
            onDecrement={handleDecrementCount}
            {...el}
          />
        </li>
      ))}
      <button
        className="btn btn-primary m-2"
        type="button"
        onClick={handleReset}
      >
        Сброс
      </button>
    </ul>
  );
};
