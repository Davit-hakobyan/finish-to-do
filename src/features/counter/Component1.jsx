import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Component.css";

import {
  add,
  deletTodo,
  checkbox,
  checkboxdelet,
  addpoxel,
} from "./counterSlice";

const Component1 = ({ todo }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [poxelecran, setPoxelecran] = useState(false);
  const [text, setText] = useState(todo.text);
  function k() {
    setPoxelecran(!poxelecran);
  }
  function poxelTodo() {
    dispatch(addpoxel({ id: todo.id, text }));
    setPoxelecran(false);
    console.log(todo.text);
  }

  function nosave() {
    setText(todo.text);

    setPoxelecran(false);

    dispatch(addpoxel({ id: todo.id, text: todo.text }));
    ref.current.innerHTML = todo.text;
    console.log(todo.text);
  }

  return (
    <div className="post">
      <input
        type="checkbox"
        onClick={() => dispatch(checkbox(todo.id))}
      ></input>
      <b
        ref={ref}
        contentEditable={poxelecran ? true : false}
        onInput={(e) => setText(e.target.innerHTML)}
        style={{ color: todo.isCompleted ? "red" : "" }}
      >
        {todo.text}
      </b>
      <button
        style={{ backgroundColor: "red", border: "none" }}
        onClick={() => {
          dispatch(deletTodo(todo.id));
        }}
      >
        X
      </button>
      {poxelecran === false ? (
        <button
          style={{ backgroundColor: "green", border: "none" }}
          onClick={k}
        >
          change
        </button>
      ) : (
        <div>
          <button   style={{ backgroundColor: "green", border: "none" }} onClick={poxelTodo}>save</button>
          <button    style={{ backgroundColor: "red", border: "none" }} onClick={nosave}>no save</button>
        </div>
      )}
    </div>
  );
};

export default Component1;
