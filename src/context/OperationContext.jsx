import{createContext, useContext, useReducer} from "react";
import axios from "axios";
import { TaskContext } from "./TaskContext";
import {v4 as uuidv4} from "uuid";

export const OperationContext=createContext();

export const OperationProvider=({children})=>{
  const{tasks,setTasks}=useContext(TaskContext);

    const postfn=(data)=>{
      setTasks(data);
      axios(`http://localhost:3004/task`, {
              method: "POST",
              data:{ tasks:[...data]},
              headers: { "Content-Type": "application/json" },
            });
    
    }
    const deletefn=(id)=>{
        let newdata=tasks.filter(task=>task.id!==id);
        postfn(newdata);
      
      };
      const togglefn=(id)=>{
        console.log(tasks);

        let newdata=tasks.map(task=>{
         return  task.id === id ? {...task,status:!task.status} : task  ;
        });
        postfn(newdata)
      };
    const reducerfn = (state, action) => {
        switch (action.type) {
            case "addtask":return axios(`http://localhost:3004/task`, {
                method: "POST",
                data: {tasks:[...tasks,{
                  id:uuidv4(),
                  title: action.payload,
                  status: false,
                },]},
                headers: { "Content-Type": "application/json" },
              });
            case "deletetask": return deletefn(action.payload);
            case "toggletask":return togglefn(action.payload);
            default: return state;
            }};

    const [state,dispatch]=useReducer(reducerfn,'');


   

 return (  <OperationContext.Provider value={{state,dispatch}}>{children}</OperationContext.Provider>)
};