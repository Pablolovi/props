// SRC/components/Task.jsx

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-text">{task.text}</span> {/* Solo el texto se tachará */}
            <button onClick={() => toggleTaskCompletion(task.id)} className="complete-button">✔</button>
            <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
        </li>
    );
};

export default Task;
