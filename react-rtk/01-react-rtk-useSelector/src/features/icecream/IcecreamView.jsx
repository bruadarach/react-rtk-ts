import React from "react";
// 1. import useSelector
import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1);
  // 2. call useSelector((state)=>{state.SliceName.InitialState})
  // 2. useSelector 는 상태값 가져오는 hook
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
    </div>
  );
};
