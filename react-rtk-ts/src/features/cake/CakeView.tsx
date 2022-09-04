// 1. import and use useAppSelector, useAppDispatch, instead of useSelector and useDispatch
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  // 2. use useAppSelector
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  // 3. use useAppDispatch
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
