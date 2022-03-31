import React, {useState} from 'react'
import TodoList from './TodoList';

function TodoMain() {
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value);
    }

    const addTask = () => {
        setTaskArray((prevTasks) => {
            return [...prevTasks, task]
        })
        setTask("")
    }
    return (
        <div>
            <h1>My Todo list</h1>
            <br/>
            <input type="text" value={task} placeholder="Enter task" onChange={onTaskChange} />
            <button onClick={addTask}>Add Task</button>
            <ol>
                {taskArray.map((val, index) => {
                    return <TodoList key={index} text={val}/>
                })}
            </ol>
        </div>
    )
}

export default TodoMain
