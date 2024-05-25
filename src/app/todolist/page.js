"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodolist } from "../redux/todoslice";
export default function page() {
  const Dispatch = useDispatch();
  const tododata = useSelector((data) => data.Tododata.todos);
  
  const [todo, settodo] = useState("");
  const userDispatch = () => {
    console.log("hallo it working", todo);
    Dispatch(addtodolist(todo));
  };
  return (
    <div>
      <h3>ADD TODOLIST</h3>
      <input
        type="text"
        onChange={(e) => settodo(e.target.value)}
        placeholder="enter a todolist"
      ></input>

      <button onClick={userDispatch} className="botton-user">
        ADD
      </button>
      <h3>TODO LIST</h3>
      {

                  tododata.length && tododata.map((item)=>(
                    <h3>{item.name}</h3>
                  ))

      }
    </div>
  );
}
