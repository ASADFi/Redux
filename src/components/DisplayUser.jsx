"use client";
import { removeUser } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";

export default function DisplayUser() {
  const userData = useSelector((data) => data.Userdata.users);
  const dispatch = useDispatch();
  console.log("userData", userData);
  return (
    <div className="display-user">
      <h3>Display Users</h3>
      {userData.map((item) => (
        <div className="display-data" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
