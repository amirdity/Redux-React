import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section className="m-5">
      <p>{count} </p>
      <button
        onClick={() => dispatch(increment())}
        className="bg-rose-500 rounded-full p-2 m-2"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-rose-500 rounded-full p-2 m-2"
      >
        -
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="bg-rose-500 rounded-full p-2 m-2"
      >
        reset
      </button>
      <button
        onClick={() => dispatch(incrementByAmount())}
        className="bg-rose-500 rounded-full p-2 m-2"
      >
        reset all
      </button>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={()=>dispatch(incrementByAmount(addValue))}> add amount </button>
      <button onClick={resetAll}> reset </button>
    </section>
  );
}

export default Counter;
