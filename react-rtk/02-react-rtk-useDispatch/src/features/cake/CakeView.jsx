import React from "react";
// 1. import useDispatch
import { useSelector, useDispatch } from "react-redux";
// 3. import Action Creators
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // 2. call useDispatch hook
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      // 4. dispatch the Actions onClikc of the buttons
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      // 4. dispatch the Actions onClikc of the buttons
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
