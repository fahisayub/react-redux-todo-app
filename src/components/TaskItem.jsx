import React, { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

const TaskItem = ({ title, id, status }) => {
    //const{dispatch}=useContext(OperationContext);
  const  onchangehandler=(e)=>{
    // let checked= e.target.checked;
     
     // dispatch({type:'toggletask',payload:id});
    }
  return (
    <div>
      <input type="radio" checked={status}  onChange={onchangehandler} />
      {title}
      <button onClick={()=>null//dispatch({type:'deletetask',payload:id})
    }>x</button>
    </div>
  );
};

export default TaskItem;
