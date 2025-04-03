// SRC/components/AddTaskForm.jsx
import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                value={text}
                onChange={handleInputChange}
                placeholder="Add a new task..."
                className="add-task-input"
            />
            <button type="submit" className="add-task-button">Add</button>
        </form>
    );
};

export default AddTaskForm;