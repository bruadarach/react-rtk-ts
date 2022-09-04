import React from "react";
// 1. import useSelector
import { useSelector } from "react-redux";

export const CakeView = () => {
  // 2. call useSelector((state)=>{state.SliceName.InitialState})
  // 2. useSelector 는 상태값 가져오는 hook
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
    </div>
  );
};
