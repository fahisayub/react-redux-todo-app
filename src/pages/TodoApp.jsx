import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import TaskStatus from '../components/TaskStatus';
const TodoApp = () => {
    return (
        <div>
    <TaskStatus/>
     <TaskInput/>
     <TaskList/>
            
        </div>
    );
};

export default TodoApp;