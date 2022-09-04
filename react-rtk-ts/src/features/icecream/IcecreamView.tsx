import React from "react";
// 1. import and use useAppSelector, useAppDispatch, instead of useSelector and useDispatch
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1);
  // 2. use useAppSelector
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );
  // 3. use useAppDispatch
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  );
};
