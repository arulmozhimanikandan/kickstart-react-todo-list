import React from 'react';
import './Todoitem.css'

function TodoItem({text, id, onComplete}) {
    return (
        <div className="todoItem" key={id}>
            <input type="radio" name="completed" value="completed" onClick={() => onComplete(id)}/>
            <p>{text}</p>
        </div>
    )
}

export default TodoItem