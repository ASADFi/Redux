"use client";
import { addUser } from "@/app/redux/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddUser() {
  const [name, setName] = useState("");
  const Dispatch = useDispatch();
  const userDispatch = () => {
    console.log("hallo it working", name);
    Dispatch(addUser(name))
  };
  console.log("hallo")
  return (
    
    <div className="add-user">
      <h3>Add Users</h3>
      
      <input
        type="text"
        className="input-user"
        placeholder="Add Users"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch} className="botton-user"> 
        Add User
      </button>
    </div>
  );
}
