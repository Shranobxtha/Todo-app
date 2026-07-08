import "./TaskContainer.css";
import TaskItem from '../TaskItem/TaskItem';

import { useState } from "react";

function TaskContainer({title, tasks }) {
    const [filterUrgent, setFilterUrgent] = useState(false);

    const toggleUrgentFilter = () => {
        // This sets the state opposite to the previous value
        setFilterUrgent((prev) => !prev);
    };

    // Filtered tasks is set to all the tasks
    let filteredTasks = tasks;

    // If filterUrgenet state is true then filteredTasks contains only tasks with isUrgent true
    if (filterUrgent) {
        filteredTasks = tasks.filter((x) => x.isUrgent);
    }
    
    if (tasks.length === 0) {
        return <h2>No Pending Tasks</h2>;
    } else {
        return (
            <>
            <h2>{title}</h2>
            <div>
                <input type="checkbox" checked={filterUrgent} id="urgent-filter" onChange={toggleUrgentFilter} />
                <label htmlFor="urgent-filter">Filter Urgent</label>
            </div>
            <ul>
                {filteredTasks.map((task, index) =>(
                    <TaskItem task={task}  index={index}/>
                ))}
            </ul>
            </>
        );
    }
}

export default TaskContainer;