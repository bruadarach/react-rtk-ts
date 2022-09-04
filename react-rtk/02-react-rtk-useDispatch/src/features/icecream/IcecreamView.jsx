import React, { useState } from "react";
// 1. import useDispatch
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  // 5. let allow the user to enter the restocking value!
  // 5. the value of the input element does not have to be part of Redux Store.
  // 5. Something is not needed outside of the component, it can stay as a local state.
  const [value, setValue] = useState(1);
  // 2. call useDispatch hook
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      {/* 4. dispatch the Actions onClikc of the buttons */}
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      {/* 6. let allow the user to enter the restocking value! */}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {/* 4. dispatch the Actions onClikc of the buttons  */}
      {/* 7. let allow the user to enter the restocking value! {value} */}
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  );
};
