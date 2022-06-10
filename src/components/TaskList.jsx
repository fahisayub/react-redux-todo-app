import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../Redux/todo/todo.action';
const TaskList = () => {
    const dispatch=useDispatch();
const {tasks}=useSelector((state)=>state.todo); 
useEffect(()=>{
   dispatch(getTodo());

},[]);
console.log(tasks);

    
    return (
        <div>{tasks.map((task)=>{ return <TaskItem key={task.id} {...task}/>})}
            
        </div>
    );
};

export default TaskList;