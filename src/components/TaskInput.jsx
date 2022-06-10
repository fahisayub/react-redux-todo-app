import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todo/todo.action";
const TaskInput = () => {

 const dispatch=useDispatch();
 let ref=useRef();
 let addtask=()=>{

 let value=ref.current.value;
 dispatch(addTodo({title:value,status:false}));
 ref.current.value=null;
 }

  return (
    <div>
      <input type="text"  ref={ref} />
      <button onClick={()=>(addtask() )}>+</button>
    </div>
  );
};

export default TaskInput;
