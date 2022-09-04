// 1. import useEffect hook
import React, { useEffect } from "react";
// 2. import useDispatch hook
// 6. import useSelector hook
import { useSelector, useDispatch } from "react-redux";
// 3. import fetchUsers function
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  // 7. select State via useSelector
  const user = useSelector((state) => state.user);
  // 4. dispatch
  const dispatch = useDispatch();

  // 1. invoke useEffect hook
  useEffect(() => {
    // 5. dispatch async Action
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {/* // 8. use State in JSX */}
      {/* JS에서 true && expression은 항상 expression으로 평가되고,
      false && expression은 항상 false로 평가됩니다. 
      따라서, && 뒤의 엘리먼트는 조건이  true 일때 출력이 되고, 
      조건이 false인 경우에는 리액트는 무시합니다*/}
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
