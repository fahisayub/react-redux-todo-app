import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export const TaskContext = createContext();

export const TaskProvider =({children})=>{ 
    
    const [tasks,setTasks]=useState([]);
   
    useEffect(()=>{
        axios.get('http://localhost:3004/task').then(res=>{
            
            const {tasks}=res.data;
        console.log(tasks);
            setTasks(tasks);
        })
    },[]);
   
   
    
    return (
        <TaskContext.Provider value={{tasks,setTasks}}>
            {children}
        </TaskContext.Provider>
    );
}