import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Component1 from "./Component1";
import './Component.css'
import {
  add,
  deletTodo,
  checkbox,
  checkboxdelet,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";


export function Counter() {
  const [value, setValue] = useState("");
  const [poxelecran, setPoxelecran] = useState("false");
  const todos = useSelector((state) => state.counter);

  const checkid = todos.filter((e) => e.isCompleted == true).length;
  console.log(todos, value);

  const dispatch = useDispatch();
  function k() {
    if (poxelecran === "true") {
      setPoxelecran("false");
    } else {
      setPoxelecran("true");
    }
  }

  return (
    <div  className="todo">
      <h1 className="h1"  >TO Do list</h1>
     <div  className="inputdiv" >
     <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(add(value));
          setValue("");
        }}
      >
        add
      </button>
     </div>
      {todos.map(todo=> <Component1 todo={todo} key={todo.id} />)

      }
     

      <div  style={{fontSize:'18px' }}>
        <span>
          {checkid}/{todos.length}Completed
        </span>
        <button     style={{ backgroundColor: "red", border: "none",fontSize:'18px' }} onClick={() => dispatch(checkboxdelet())}>
          Clear complited
        </button>
      </div>
    </div>
  );
}
